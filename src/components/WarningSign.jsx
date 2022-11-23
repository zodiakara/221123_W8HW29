import Alert from "react-bootstrap/Alert";

function WarningSign({ text }) {
  return (
    <Alert variant="success">
      <Alert.Heading>Hey, this is an alert msg!</Alert.Heading>
      <p>{text}</p>
    </Alert>
  );
}

export default WarningSign;
