import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const UnSuccess = () => {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="error">
        <AlertTitle>Unsuccessful</AlertTitle>
        There was a problem making your oredr —{" "}
        <strong>check your information and try again</strong>
      </Alert>
    </Box>
  );
};

export default UnSuccess;