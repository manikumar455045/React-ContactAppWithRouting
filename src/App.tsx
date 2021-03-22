import React from 'react';
import "./App.css";
import {BrowserRouter , Route , Switch} from "react-router-dom"
import Navbar from "./Components/Navbar";
import ContactList from "./Components/ContactList";
import Home from "./Components/Home";
import ContactDetail from "./Components/ContactDetail";



let App  = () => {
  return (
    <React.Fragment>
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/contact-list'} component={ContactList}/>
                <Route exact path={'/contact-list/:contactID'} component={ContactDetail}/>
            </Switch>
        </BrowserRouter>
        </React.Fragment>
  );
}

export default App;
