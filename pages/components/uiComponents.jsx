import { Button, Box } from "@material-ui/core";

export const Message = ({ message, title }) => {
  return (
    <Box mt={5}>
      <h4>
        {`${title.substring(0, 1).toUpperCase()}${title.substring(1)}!!!`}
      </h4>
      <p>{message}</p>
    </Box>
  );
};

export const LabelledButton = ({ label, onClick }) => (
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
    {label}
  </Button>
);
