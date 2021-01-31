import { React } from "react";
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import RegisterPage from './RegisterPage'; 
import LoginPage from './LoginPage';

export default function Main() {
    return (
        <Router>
            <Route path='/register'>
                <RegisterPage />
            </Route>
            <Route path='/login'>
                <LoginPage />
            </Route>
        </Router>
    )
}