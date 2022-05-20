import Button from "@mui/material/Button";

const ButtonComponent = ({ title, handleAction }) => {
  return (
    <Button variant="contained" onClick={handleAction}>
      {title}
    </Button>
  );
};

export default ButtonComponent;
