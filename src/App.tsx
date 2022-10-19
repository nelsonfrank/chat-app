//dependencies
import { Routes, Route } from "react-router-dom";

// components
import Home from "./screens/home";
import Chats from "./screens/chats";
import ErrorScreen from "./screens/ErrorScreen";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="chats" element={<Chats />} />
      <Route path="*" element={<ErrorScreen />} />
    </Routes>
  );
}

export default App;
