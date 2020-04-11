import React, { useEffect, useState } from "react";
import { Route, Switch, Router } from "react-router-dom";
import { HomePage } from "../pages/Home/Home.page";
import { history } from "./history";
import { ConversationPage } from "../pages/Conversation/Conversation.page";
import { LoginPage } from "../pages/Login/Login.page";
import { api } from "../lib/API";
import { SignupPage } from "../pages/Signup/Signup.page";

export const AppRouter = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) setLoading(false);
    else {
      (async function loadMe() {
        await api.me()
        setLoading(false)
      })()
    }
  }, []);

  if (loading) return <span>Loading...</span>
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/c/:conversationID" exact component={ConversationPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />

      </Switch>
    </Router>
  );
};
