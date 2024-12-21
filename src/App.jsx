import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Channel from "./Pages/Channel";
import "./App.css";
import Signup from "./Pages/Signup";
import { AuthProvider } from "./context/auth";
import PrivateRoute from "./components/PrivateRoute";
import MyChannel from "./Pages/Channel/MyChannel";

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
                <Channel />
              </PrivateRoute>
            }
          />
          <Route
            path="/my-channel"
            element={
              <PrivateRoute>
                <MyChannel />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
