import { addToWaitingList } from "../pages/components/eventBooking";

describe("Waiting List Api Request", () => {
  test("it should give a success response if you provide a valid mobile number and email address", async () => {
    const mobileNumber = 1231231231;
    const emailAddress = "sample@domain";
    const output = { status: "success" };
    let response = {};

    response = await addToWaitingList(mobileNumber, emailAddress);
    console.log("derd, respo", response.data);
    expect(response).toEqual(output);
  });

  test("it should give an error response with a message if you do not provide a valid mobile number and email address", async () => {
    const mobileNumber = 1231231231;
    const emailAddress = "sample@domain";
    const output = {
      message: "Email and mobile number must be provided",
      status: "error",
    };
    let response = {};

    response = await addToWaitingList(mobileNumber);
    console.log("derd, respo", response.data);
    expect(response).toEqual(output);
  });

  test("it should give an error response stating email already registered", async () => {
    const mobileNumber = 1231231231;
    const emailAddress = "alreadysubscribed@";
    const output = {
      message: "You have already been added to the waiting list",
      status: "error",
    };
    let response = {};

    response = await addToWaitingList(mobileNumber, emailAddress);
    console.log("derd, respo", response.data);
    expect(response).toEqual(output);
  });
});
