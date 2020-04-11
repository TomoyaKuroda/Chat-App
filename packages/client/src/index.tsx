import "./styles/base.scss";
import React from "react";
import ReactDOM from "react-dom";
import { AppRouter } from "./Router/Router";
import "./lib/API";
import { ConversationPage } from "./pages/Conversation/Conversation.page";
(async () => {
  ReactDOM.render(
    <ConversationPage.Provider>

      <AppRouter />
    </ConversationPage.Provider>
    ,

    document.getElementById("app"));
})();
