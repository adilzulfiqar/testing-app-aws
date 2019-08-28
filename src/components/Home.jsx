import React, { Component } from "react";
import Blog from "./Blog";

import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg">
                    <Link to="/newBlog">
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                        >
                            Add New Blog
                        </button>
                    </Link>
                    <Link to="/newUser">
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                        >
                            Register
                        </button>
                    </Link>
                </nav>
                <Blog />
            </div>
        );
    }
}
