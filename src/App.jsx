import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Channel from "./Pages/Channel"
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-channel" element={<Channel />} />
      </Routes>
    </>
  );
}

export default App;
