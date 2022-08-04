

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./containers/Home";
import Login from "./containers/Login";
import Detail from "./containers/Detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
