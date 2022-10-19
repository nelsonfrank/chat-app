// dependencies
import { Typography, Box, TextField, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// styles
import Styles from "./Home.styles";

const Home = () => {
  return (
    <Box component="div" sx={Styles.app}>
      <Typography variant="h4" sx={Styles.heading}>
        Chat Application
      </Typography>
      <Typography variant="subtitle1" sx={Styles.subTitle}>
        Welcome to group chat application
      </Typography>
      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <Box component="div" sx={Styles.userNameContainer}>
          <Typography variant="subtitle1" sx={Styles.formHeading}>
            To join the group chat, you have to enter your unique username
          </Typography>

          <TextField
            id="standard-basic"
            label="Username"
            variant="standard"
            sx={Styles.textField}
          />
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={Styles.joinBtn}
          >
            Join
          </Button>
        </Box>
      </div>
    </Box>
  );
};

export default Home;
