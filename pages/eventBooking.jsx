import React, { useState, useReducer } from "react";
import axios from "axios";
import { Button, Box } from "@material-ui/core";
// import FormDialog from " ./formDialog";

const Message = ({ message, title }) => {
  return (
    <div style={{ marginTop: 50 }}>
      <h4>
        {`${title.substring(0, 1).toUpperCase()}${title.substring(1)}!!!`}
      </h4>
      <p>{message}</p>
    </div>
  );
};

const addToWaitingListHandler = async (
  mobileNumber,
  emailAddress,
  setAddToWaitingListResponse,
  setError
) => {
  let requestBody = {
    emailAddress: emailAddress,
    mobileNumber: mobileNumber,
  };
  let response = await axios
    .post("http://localhost:6005/api/waiting-list", requestBody)
    .then((response) => setAddToWaitingListResponse(response.data))
    .catch((error) => {
      setError({
        status: true,
        message: error.response.data.message,
      });
    });
};

const BackButton = ({ onClick }) => (
  <Button
    style={{
      fontSize: "medium",
      width: "fit-content",
      color: "white",
      backgroundColor: "#2285ff",
      borderRadius: 2,
      border: "none",
    }}
    onClick={onClick}
  >
    Back
  </Button>
);

const WaitingList = ({ setShowDialogFlag }) => (
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
        onClick={() => setShowDialogFlag(true)}
      >
        join the waiting list
      </Button>
    </div>
  </Box>
);

export const SoldOutNotice = () => {
  const [addedToWaitingList, setAddedtoWaitingList] = useState(false);
  const [addToWaitingListResponse, setAddToWaitingListResponse] = useState({
    data: "default",
  });
  const [error, setError] = useState({ status: false, message: "" });
  const [showDialogFlag, setShowDialogFlag] = useState(false);
  const addToWaitingListSuccessMessage =
    "You have been added to the waiting list";

  console.log("booking response", addToWaitingListResponse);
  console.log("booking error", error);
  console.log("booking complete", addedToWaitingList);

  console.log("booking response status", addToWaitingListResponse.status);

  return addToWaitingListResponse.data === "default" && !error.status ? (
    <div
      style={{
        marginBottom: 30,
        marginTop: 20,
        fontSize: "16px",
        lineHeight: "27.2px",
      }}
    >
      {/* {showDialogFlag ? (
        <FormDialog
          displayData={{ title: "Join waiting list" }}
          open={showDialogFlag}
          onClose={setShowDialogFlag}
          addToWaitingListHandler={addToWaitingListHandler}
          setAddToWaitingListResponse={setAddToWaitingListResponse}
          setError={setError}
        />
      ) : null} */}
      <WaitingList setShowDialogFlag={setShowDialogFlag} />
    </div>
  ) : addToWaitingListResponse.status ? (
    <div>
      <Message
        title={addToWaitingListResponse.status}
        message={addToWaitingListSuccessMessage}
      />
      <BackButton
        onClick={() => {
          setAddToWaitingListResponse({ data: "default" });
          setError({ status: false, message: "" });
        }}
      />
    </div>
  ) : (
    <div>
      <Message title={"Error"} message={error.message} />
      <BackButton
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
