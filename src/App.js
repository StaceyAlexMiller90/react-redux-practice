// src/App.js
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PostPage from './pages/PostPage/PostPage'
import LoginPage from './pages/LoginPage/LoginPage'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import Toolbar from './components/Toolbar/Toolbar'
import { useDispatch } from "react-redux";
import { bootstrapLoginState } from "./store/auth/actions";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapLoginState());
  }, []);

  return (
    <div>
      <Toolbar/>
      <Switch>
        <Route path='/signup' component={SignUpPage}/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/post/:id/' component={PostPage}/>
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}
