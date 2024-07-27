import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./pages/navbar";
import Main from "./pages/main"
// import Login from "./pages/Login";
import Sliderscreen1 from "./pages/sliderscreen1";

function App() {
  return (
    <div>


      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login/>}/> */}
          <Route path="/" element={< Main />} />
            <Route path="/sliderscreen"  element={< Sliderscreen1 />}  />
          {/* <Route path="/update/:bookid" element={<Update />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
