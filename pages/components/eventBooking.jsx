import React, { useState } from "react";
import axios from "axios";
import { Button, Box } from "@material-ui/core";
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
      console.log("api response", response);
      return response.data;
    })
    .catch((error) => {
      return { status: "error", message: error.response.data.message };
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        margin: 40,
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
        // onClick={() => waitingListHandler()}
        onClick={() => setShowDialogFlag(true)}
      >
        join the waiting list
      </Button>
    </div>
  </Box>
);
export const SoldOutNotice = () => {
  const [addToWaitingListCallMade, setAddToWaitingListCallMade] =
    useState(false);
  const [addToWaitingListResponse, setAddToWaitingListResponse] = useState({
    data: "default",
  });
  const [error, setError] = useState({ status: false, message: "" });
  const [showDialogFlag, setShowDialogFlag] = useState(false);
  const addToWaitingListSuccessMessage =
    "You have been added to the waiting list";
  let response = {};

  console.log("booking response", addToWaitingListResponse);
  console.log("booking error", error);
  console.log("booking complete", addToWaitingListCallMade);

  console.log("booking response status", addToWaitingListResponse.status);

  const waitingListHandler = async (mobileNumber, emailAddress) => {
    console.log("in waiting list handler");
    response = await addToWaitingList(mobileNumber, emailAddress);
    setAddToWaitingListResponse(response);
    setAddToWaitingListCallMade(true);
    console.log("waiting list handler response", response);
  };

  return addToWaitingListResponse.data === "default" && !error.status ? (
    <div
      style={{
        marginBottom: 30,
        marginTop: 20,
        fontSize: "16px",
        lineHeight: "27.2px",
      }}
    >
      {showDialogFlag ? (
        <FormDialog
          displayData={{ title: "Join waiting list" }}
          open={showDialogFlag}
          onClose={setShowDialogFlag}
          waitingListHandler={waitingListHandler}
        />
      ) : null}
      <WaitingList
        setShowDialogFlag={setShowDialogFlag}
        waitingListHandler={waitingListHandler}
      />
    </div>
  ) : addToWaitingListResponse.status === "success" ? (
    <div>
      <Message
        title={addToWaitingListResponse.status}
        message={addToWaitingListSuccessMessage}
      />
      <LabelledButton
        label={"Back"}
        onClick={() => {
          setAddToWaitingListResponse({ data: "default" });
          setError({ status: false, message: "" });
        }}
      />
    </div>
  ) : (
    <div>
      <Message title={"Error"} message={addToWaitingListResponse.message} />
      <LabelledButton
        label={"Back"}
        onClick={() => {
          setAddToWaitingListResponse({ data: "default" });
          setError({ status: false, message: "" });
        }}
      />
    </div>
  );
};

const EventBooking = () => {
  //sold out set to true on purpose as it meets the requirement
  const [soldOut, setSoldOut] = useState(true);

  return (
    <div>
      <button disabled={soldOut}>Book Tickets</button>
      {soldOut ? (
        <div>
          <SoldOutNotice />
        </div>
      ) : null}
    </div>
  );
};

export default EventBooking;
