import "./App.css";
import Form from "./components/common/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

  const handleAction = (id) => {
    console.log(email);
    const authentication = getAuth();
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => console.log(response))
        .catch((error) => {
          console.log(error);
        });
      //It will take three parameters – authentication, the email state, and the password state
    }
  };

  return (
    <BrowserRouter>
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
