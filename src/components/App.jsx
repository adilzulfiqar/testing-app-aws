import React, { Component } from "react";
import { Route } from "react-router-dom";

import BlogForm from "./BlogForm";
import Home from "./Home";
import ReadBlog from "./ReadBlog";
import NewUser from "./NewUser";

import axios from 'axios';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/newBlog"} component={BlogForm} />
                <Route exact path={"/newUser"} component={NewUser} />
                <Route exact path={"/blog/:id"} component={ReadBlog} />
            </div>
        );
    }
}
