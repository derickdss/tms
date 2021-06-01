import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Button,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const FormDialog = ({ displayData, open, onClose, waitingListHandler }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [mobileError, setMobileError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  return (
    <Dialog open={open} onClose={() => onClose(false)} maxWidth={false}>
      <DialogTitle
        style={{
          backgroundColor: "rgb(34, 133, 255)",
          color: "white",
        }}
        id="customized-dialog-title"
      >
        <Box mr={20}>{displayData?.title}</Box>
        <IconButton
          style={{
            position: "absolute",
            right: "10px",
            top: "10px",
            color: "white",
          }}
          aria-label="close"
          onClick={() => onClose(false)}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box mt={5} mb={5}>
          <FormControl error={mobileError}>
            <InputLabel htmlFor="component-error">
              Mobile Number<span style={{ color: "red" }}>*</span>
            </InputLabel>
            <Input
              id="component-mobileno"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              aria-describedby="component-error-text"
            />
            {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
          </FormControl>
        </Box>
        <Box mt={5} mb={5}>
          <FormControl error={emailError}>
            <InputLabel htmlFor="component-error">
              Email Address<span style={{ color: "red" }}>*</span>
            </InputLabel>
            <Input
              id="component-emailaddress"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              aria-describedby="component-error-text"
              fullWidth
            />
            {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
          </FormControl>
        </Box>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Button
            style={{
              fontSize: "small",
              width: "fit-content",
              color: "white",
              backgroundColor: "#2285ff",
              borderRadius: 2,
              border: "none",
              marginRight: 5,
            }}
            type="submit"
            onClick={() => {
              waitingListHandler(mobileNumber, emailAddress);
              onClose(false);
            }}
          >
            Submit
          </Button>
          <Button
            style={{
              fontSize: "small",
              width: "fit-content",
              color: "#2285ff",
              border: "1px solid #2285ff",
              borderRadius: 2,
            }}
            onClick={() => onClose(false)}
          >
            Cancel
          </Button>
        </Box>
        <Box>
          <span style={{ fontSize: "13px" }}>
            Compulsary fields <span style={{ color: "red" }}>*</span>
          </span>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;
