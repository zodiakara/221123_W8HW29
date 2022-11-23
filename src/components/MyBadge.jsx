import Badge from "react-bootstrap/Badge";

function MyBadge(props) {
  return (
    <div>
      <Badge className={props.color}>{props.text}</Badge>
    </div>
  );
}

export default MyBadge;
