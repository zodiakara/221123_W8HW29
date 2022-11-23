import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";

function App() {
  return (
    <div>
      <WarningSign text="fajfjsfnjs" />
      <div>
        <MyBadge text="badge" color="bg-success" />
      </div>
    </div>
  );
}

export default App;
