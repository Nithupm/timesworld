import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/login";
import store from "./store/store";
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}> 
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
