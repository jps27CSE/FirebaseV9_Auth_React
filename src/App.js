import Form from "./components/common/Form";
import Home from "./components/common/Home";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import { app } from "./Firebase/firebase-config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleAction = (id) => {
    console.log(email);
    const authentication = getAuth();
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password) //It will take three parameters – authentication, the email state, and the password state
        .then((response) => {
          navigate("/home");
          // sessionStorage.setItem(
          //   "Auth Token",
          //   response._tokenResponse.refreshToken
          // );
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={
            <Form
              title="Login"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(1)}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Form
              title="Register"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(2)}
            />
          }
        />
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
