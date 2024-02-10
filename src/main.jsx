import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { FeedProvider } from "./contexts/FeedContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <FeedProvider>
        <App />
      </FeedProvider>
    </Router>
  </React.StrictMode>
);
