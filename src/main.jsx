import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { FeedProvider } from "./contexts/FeedContext.jsx";
import { SearchProvider } from "./contexts/SearchContext.jsx";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <FeedProvider>
        <SearchProvider>
          <Auth0Provider
            domain="dev-wwk5lsdpd6c8g6p6.us.auth0.com"
            clientId="6UnRqDQk8RZIFSZpbCpWOV9AANYSTgxa"
            authorizationParams={{
              redirect_uri: window.location.origin,
            }}
          >
            <App />
          </Auth0Provider>
        </SearchProvider>
      </FeedProvider>
    </Router>
  </React.StrictMode>
);
