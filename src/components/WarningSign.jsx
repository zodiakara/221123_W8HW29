import Alert from "react-bootstrap/Alert";

function WarningSign({ text }) {
  return (
    <Alert variant="success">
      <Alert.Heading>{text}</Alert.Heading>
    </Alert>
  );
}

export default WarningSign;
