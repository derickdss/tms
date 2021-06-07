import React, { useState } from "react";
import axios from "axios";
import { Button, Box, CircularProgress } from "@material-ui/core";
import { Message, LabelledButton } from "./uiComponents";
import FormDialog from "./formDialog";

export const addToWaitingList = async (mobileNumber, emailAddress) => {
  let requestBody = {
    emailAddress: emailAddress,
    mobileNumber: mobileNumber,
  };
  let response = await axios
    .post("http://localhost:7005/api/waiting-list", requestBody)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      let errorMessage = "Network error, please retry later!";
      if (error.response) {
        errorMessage = error.response.data.message;
      }
      return { status: "error", message: errorMessage };
    });
  return response;
};

const WaitingList = ({ setShowDialogFlag, waitingListHandler }) => (
  <Box>
    <p>Hey folks, </p>
    <span>
      Unfortunately, the 1st batch of tickets has run out, but you can choose to
      be added to the waiting list to be the first to get notified when a new
      new batch of tickets arrives. <br />
      <br />
      Click the below button to join the waiting list by providing your email
      and mobile number. Thats all, we will notify when the next batch of
      tickets are in.
    </span>
    <Box
      m={5}
      display={"flex"}
      flexDirection={"column"}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Button
        style={{
          fontSize: "medium",
          width: "fit-content",
          color: "white",
          backgroundColor: "#2285ff",
          borderRadius: 2,
          border: "none",
        }}
        onClick={() => setShowDialogFlag(true)}
      >
        join the waiting list
      </Button>
    </Box>
  </Box>
);
export const SoldOutNotice = () => {
  const [addToWaitingListCallMade, setAddToWaitingListCallMade] =
    useState(false);
  const [addToWaitingListResponse, setAddToWaitingListResponse] = useState({
    data: "default",
  });
  const [showDialogFlag, setShowDialogFlag] = useState(false);
  const [loading, setLoading] = useState(false);
  const addToWaitingListSuccessMessage =
    "You have been added to the waiting list";
  let response = {};

  const waitingListHandler = async (mobileNumber, emailAddress) => {
    setLoading(true);
    response = await addToWaitingList(mobileNumber, emailAddress);
    setAddToWaitingListResponse(response);
    setAddToWaitingListCallMade(true);
    setLoading(false);
  };

  return addToWaitingListResponse.data === "default" &&
    !addToWaitingListCallMade ? (
    <Box mb={3.8} mt={2.5} style={{ fontSize: "16px", lineHeight: "27.2px" }}>
      {showDialogFlag ? (
        <FormDialog
          displayData={{ title: "Join waiting list" }}
          open={showDialogFlag}
          onClose={setShowDialogFlag}
          waitingListHandler={waitingListHandler}
        />
      ) : null}
      {loading ? (
        <CircularProgress />
      ) : (
        <WaitingList
          setShowDialogFlag={setShowDialogFlag}
          waitingListHandler={waitingListHandler}
        />
      )}
    </Box>
  ) : addToWaitingListResponse.status === "success" ? (
    <Box>
      <Message
        title={addToWaitingListResponse.status}
        message={addToWaitingListSuccessMessage}
      />
      <LabelledButton
        label={"Back"}
        onClick={() => {
          setAddToWaitingListResponse({ data: "default" });
          setAddToWaitingListCallMade(false);
        }}
      />
    </Box>
  ) : (
    <Box>
      <Message title={"Error"} message={addToWaitingListResponse.message} />
      <LabelledButton
        label={"Back"}
        onClick={() => {
          setAddToWaitingListResponse({ data: "default" });
          setAddToWaitingListCallMade(false);
        }}
      />
    </Box>
  );
};

const EventBooking = () => {
  //sold out set to true on purpose as it meets the requirement
  const [soldOut, setSoldOut] = useState(true);

  return (
    <Box>
      <button disabled={soldOut}>Book Tickets</button>
      {soldOut ? (
        <Box>
          <SoldOutNotice />
        </Box>
      ) : null}
    </Box>
  );
};

export default EventBooking;
