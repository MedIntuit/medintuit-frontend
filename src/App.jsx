import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import CreateChannel from "./Pages/CreateChannel";
import "./App.css";
import Signup from "./Pages/Signup";
import { AuthProvider } from "./context/auth";
import PrivateRoute from "./components/PrivateRoute";
import MyChannels from "./Pages/MyChannels";
import Channel from "./Pages/Channel/Channel.jsx";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/create-channel"
            element={
              <PrivateRoute>
                <CreateChannel />
              </PrivateRoute>
            }
          />
          <Route
            path="/my-channel"
            element={
              <PrivateRoute>
                <MyChannels />
              </PrivateRoute>
            }
          />
          <Route
            path="channel/:id"
            element={
              <PrivateRoute>
                <Channel />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
