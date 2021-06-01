import React, { useState } from "react";
import axios from "axios";

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

const App = () => {
  const [addToWaitingListResponse, setAddToWaitingListResponse] = useState({
    data: "default",
  });
  const [error, setError] = useState({ status: false, message: "" });
  let response = {};

  console.log("derd, add to waiting", addToWaitingListResponse);

  const waitingListHandler = async () => {
    response = await addToWaitingList(1231231231, "sample@domain");
    setAddToWaitingListResponse(response);
  };

  console.log("derd, respon se", addToWaitingListResponse);

  return (
    <div>
      <button onClick={waitingListHandler}>add to waiting list</button>
    </div>
  );
};

export default App;
