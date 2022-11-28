import { ListGroupItem } from "react-bootstrap";

function SingleComment(props) {
  return (
    <ListGroupItem>
      <div>
        <p>{props.author}</p>
        <p>{props.comment}</p>
        <p>{props.rate}</p>
      </div>
    </ListGroupItem>
  );
}

export default SingleComment;
