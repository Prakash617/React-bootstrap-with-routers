import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header";
import Home from "./pages/home";
import About from "./pages/about";
import {
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div classNameName="App">
      <Header />
      <Routes>
      <Route path="/" element={<About />} />
      <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
