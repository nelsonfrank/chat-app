// dependencies
import { useState, useId } from "react";
import {
  Box,
  Avatar,
  Stack,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import Groups2Icon from "@mui/icons-material/Groups2";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { grey, deepPurple } from "@mui/material/colors";

const Chats = () => {
  const [messages, setMessages] = useState([
    {
      recipient: "Hello",
    },
    {
      sender: "Hi, How are you?",
    },
  ]);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleMsgInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setMsg(event.target.value);
  };

  const handleSendMsg = () => {
    setMessages((prevMsgs) => [
      ...prevMsgs,
      {
        sender: msg,
      },
    ]);
    setMsg("");
  };
  return (
    <Box
      component="div"
      sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Box
        component="div"
        sx={{
          height: "4rem",
          width: "100%",
          backgroundImage:
            "linear-gradient(to right bottom, #4649ff, #5e43f8, #703cf1, #7e34ea, #8a2be2)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          padding: "0 0.25rem",
        }}
      >
        <Stack direction="row" spacing={3} alignItems="center">
          <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              aria-label="back"
              sx={{ color: "#fff" }}
              onClick={() => navigate("/")}
            >
              <ArrowBackIcon />
            </IconButton>
            <Avatar>
              <Groups2Icon />
            </Avatar>
          </Box>
          <Typography variant="h6">Group chat</Typography>
        </Stack>
      </Box>

      {/* Chats display */}
      <Box component="div" sx={{ flex: 1, padding: "1rem" }}>
        {messages.map((message, index) => {
          const styles = {
            chatContainerStyles: {
              display: "flex",
              alignItems: "center",
              gap: 1,
              margin: "2rem 0",
              flexDirection: message.recipient ? "row" : "row-reverse",
            },
            chatAvatar: {
              bgcolor: message.recipient ? deepPurple[500] : grey[300],
            },
            chatMsg: {
              bgcolor: message.recipient ? deepPurple[500] : grey[300],
              color: message.recipient ? "#fff" : grey[600],
              padding: "0.25rem 0.75rem",
              borderRadius: "0.25rem",
            },
          };

          return (
            <Box
              key={`${Object.keys(message)[0]}_${index + 1}`}
              component="div"
              sx={styles.chatContainerStyles}
            >
              <Avatar sx={styles.chatAvatar}></Avatar>
              <Box component="div" sx={styles.chatMsg}>
                <Typography variant="caption">
                  {message.recipient ? message.recipient : message.sender}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
      {/* Message form */}
      <Box
        component="div"
        sx={{
          height: "4rem",
          width: "100%",
          backgroundImage:
            "linear-gradient(to right bottom, #4649ff, #5e43f8, #703cf1, #7e34ea, #8a2be2)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          padding: "0 0.5rem",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Send message"
            size="small"
            sx={{
              backgroundColor: "#fff",
              borderRadius: "1rem",
              outline: "none",
              border: "none",
              width: "70%",
            }}
            value={msg}
            onChange={(e) => handleMsgInputChange(e)}
          />
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "1rem",
              width: "25%",
            }}
          >
            <Button
              variant="text"
              sx={{
                color: "#000",
                backgroundColor: "#fff",
                width: "100%",
                borderRadius: "1rem",
              }}
              className="Button"
              disabled={msg === ""}
              onClick={handleSendMsg}
            >
              Send
            </Button>
          </div>
        </Stack>
      </Box>
    </Box>
  );
};

export default Chats;
