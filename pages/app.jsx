import React, { useState } from "react";
import axios from "axios";

const addToWaitingList = async (
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
    .post("http://localhost:7005/api/waiting-list", requestBody)
    .then((response) => setAddToWaitingListResponse(response.data))
    .catch((error) => {
      setError({
        status: true,
        message: error.response.data.message,
      });
    });
};

const App = () => {
  const [addToWaitingListResponse, setAddToWaitingListResponse] = useState({
    data: "default",
  });
  const [error, setError] = useState({ status: false, message: "" });

  const waitingListHandler = () => {
    addToWaitingList(
      1231231231,
      "sample@domain",
      setAddToWaitingListResponse,
      setError
    );
  };
  return (
    <div>
      <button onClick={waitingListHandler}>add to waiting list</button>
    </div>
  );
};

export default App;
