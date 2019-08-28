import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Blog extends Component {
    state = {
        data: []
    };
    componentDidMount = () => {
        axios
            .get("api/blog/blog")
            .then(res => {
                this.setState({
                    data: res.data
                });
                // console.log(this.state);
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        const blogPosts = this.state.data.map((e, i) => {
            // console.log(e);

            return (
                <div className="col-lg-4 col-md-6 item" key={i}>
                    <div className="single-blog">
                        <div className="blog-img">
                            <img
                                src="http://infinityflamesoft.com/html/abal-preview/assets/img/blog/blog1.jpg"
                                alt=""
                            />
                            <div className="post-category">
                                <a href="#">Creative</a>
                            </div>
                        </div>
                        <div className="blog-content">
                            <div className="blog-title">
                                <h4>
                                    <a href="#">{e.heading}</a>
                                </h4>
                                <div className="meta">
                                    <ul>
                                        <li>{e.date}</li>
                                    </ul>
                                </div>
                            </div>
                            <p>{e.description}</p>
                            <Link className="box_btn" to={`/blog/${e._id}`}>
                                read more
                            </Link>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <section className="blog blog-me pt-100 pb-100" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 mx-auto text-center">
                            <div className="section-title mb-100">
                                <h4>Blogs</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">{blogPosts}</div>
                </div>
            </section>
        );
    }
}

const mapStatetoProps = state => {
    return {
        data: state.data
    };
};

export default connect(mapStatetoProps)(Blog);
