import React, { Component } from "react";
import axios from "axios";

export default class ReadBlog extends Component {
    state = {
        data: []
    };
    componentDidMount = () => {
        axios
            .get("../../api/blog/blog")
            .then(res => {
                this.setState({
                    data: res.data
                });
                // console.log("state", this.state);
            })
            .catch(error => {
                console.log(error);
            });
    };
    render() {
        const { data } = this.state;
        const postId = this.props.match.params.id;
        const response = data.map((post, index) => {
            if (postId == post._id) {
                console.log(post);
                return (
                    <div className="row" className="ReadBlog" key={postId}>
                        <div className="col-12">
                            <div className="blog-img">
                                <img src={post.image} alt="" />
                            </div>
                        </div>
                        <div className="text-center">
                            Punlished on: {post.date}
                        </div>
                        <h1>{post.heading}</h1>
                        <p className="lead">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </p>
                    </div>
                );
            }
        });
        return <div>{response}</div>;
    }
}
