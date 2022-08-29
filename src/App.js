import { Router } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import RoutePath from "./routes/RoutePath";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <RoutePath />
      </Router>
    </>
  );
}

export default App;
