import { Component } from "react";

let uri = `https://striveschool-api.herokuapp.com/api/comments/`;
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZkNmUxM2Q0YmUzZDAwMTU4NDYxZDIiLCJpYXQiOjE2Njk2NDUzNjAsImV4cCI6MTY3MDg1NDk2MH0.LJEo2PyfWof8jolovXi-TB7s-AcqnMxbV3TotiXU75E",
  },
};

class CommentsList extends Component {
  state = { comments: [] };
  getComments = async () => {
    let response = await fetch(uri, options);
    if (response.ok) {
      const data = await response.json();
      this.setState({ comments: data });
      console.log(data);
    }
  };

  componentDidMount = () => {
    this.getComments();
  };

  render() {
    this.state.comments.map((comment) => console.log(comment._id));
    return <div></div>;
  }
}

export default CommentsList;
