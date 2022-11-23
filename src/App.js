import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import books from "./assets/scifi.json";

import SingleBook from "./components/SingleBook";

function App() {
  return (
    <div>
      <WarningSign text="add custom text here" />
      <div>
        <MyBadge text="badge" color="bg-success" />
      </div>
      <SingleBook book={books[0]} />
    </div>
  );
}

export default App;
