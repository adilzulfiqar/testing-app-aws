import React, { Component } from "react";

import Axios from "axios";

export default class NewUser extends Component {
    newRegistration = e => {
        e.preventDefault();
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        Axios.post("/api/users", {
            email: email,
            password: password
        })
            .then(e => {
                console.log("working", e.data);
                alert("data sent");
            })
            .catch(e => {
                console.log("error", e);
            });
    };
    render() {
        return (
            <div>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                                name="email"
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                name="password"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        onClick={this.newRegistration}
                        className="btn btn-primary"
                    >
                        Sign up
                    </button>
                </form>
            </div>
        );
    }
}
