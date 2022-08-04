

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./containers/Home";
import Detail from "./containers/Detail";
import Profile from "./containers/Profile";
import Login from "./containers/Login";
import Register from "./containers/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
