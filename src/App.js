import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/login";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Set the default route to LoginPage */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
