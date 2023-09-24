// This code is the entry point of the application and represents the main App component.
import "./App.css"; // Importing the associated CSS styles
import { Routes, Route } from "react-router";
import Home from "./Containers/Home/Home";
import LogInPage from "./Containers/Autentication/LogInPage";
import Chat from "./Containers/Chat/Chat";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LogInPage" element={<LogInPage />} />
        <Route path="/Chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
