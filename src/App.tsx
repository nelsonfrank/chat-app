import { useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="App">
        <h1>Hello World!</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <Button
            variant="contained"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default App;
