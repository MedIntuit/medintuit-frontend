import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import CreateChannel from "./Pages/CreateChannel";
import Signup from "./Pages/Signup";
import { AuthProvider } from "./context/auth";
import PrivateRoute from "./components/PrivateRoute";
import MyChannels from "./Pages/MyChannels";
import Channel from "./Pages/Channel/Channel.jsx";
import About from "./Pages/About/About.jsx";
import DataCleaningUI from "./Pages/DataCleaningUI/DataCleaningUI.jsx";

import "./App.css";
import Outlier_detection from "./Pages/OutlierDetection/Outlier_Detection.jsx";

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
          <Route path="/about" element={<About />} />
          <Route path="/data-cleaning-by-finding-missing-values" element={<DataCleaningUI />} />
          <Route path="/outliers-detection-and-removal" element={<Outlier_detection />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
