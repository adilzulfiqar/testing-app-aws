import React, { Component } from "react";
import { connect } from "react-redux";

import { handleSubmit, handleChange } from "../store/action/action";

class BlogForm extends Component {
  state = {};
  componentDidMount = () => {
    // console.log(this.props);
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.changestate(this.state);
  };
  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="container text-center">
        <h1>Add New Blog</h1>
        <form className="text-left" onSubmit={this.handleSubmit}>
          {/* <form className="text-left" onSubmit={e => handleSubmit(e, this.props)}> */}
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="heading"
              id="blog-heading"
              onChange={this.handleChange}
              placeholder="Heading"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              name="description"
              rows="10"
              name="description"
              id="description"
              placeholder="Add Details"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
const mapStatetoProps = state => {
  return {
    heading: state.heading,
    description: state.description
  };
};
const mapDisptatchtoprops = dispatch => {
  return {
    changestate: e => {
      dispatch(handleSubmit(e));
    }
  };
};
export default connect(
  mapStatetoProps,
  mapDisptatchtoprops
)(BlogForm);
