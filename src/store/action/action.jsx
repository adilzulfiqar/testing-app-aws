import axios from "axios";

export const handleSubmit = e => {
  console.log("handle submit working", e);

  return dispatch => {
    axios
      .post("api/blog/blog", {
        heading: e.heading,
        description: e.description
      })
      .then(() => {
        console.log("data sent");
      })
      .catch(error => {
        console.log("error", error);
      });
    dispatch({
      type: "SUBMIT",
      payload: e
    });
  };
};

export const handleChange = e => {
  console.log("handle change working", e.target.value);
  return {
    type: "CHANGE",
    payload: e.target.value
  };
};
