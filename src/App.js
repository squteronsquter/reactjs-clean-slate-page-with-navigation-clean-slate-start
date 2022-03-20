import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-slate-100 text-slate-900">
        <Router>
          <Navbar />
        </Router>
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
