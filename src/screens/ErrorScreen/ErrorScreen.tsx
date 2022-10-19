// dependencies
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p style={{ marginTop: "1rem" }}>
        <i>Page not found</i>
      </p>
      <Button
        variant="contained"
        sx={{ margin: "2rem 0rem" }}
        onClick={handleGoHome}
      >
        Go Home
      </Button>
    </div>
  );
};

export default ErrorPage;
