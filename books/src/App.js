import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import scifi from "./scifi.json";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <WarningSign warningText="Book List" className="cardSelected" />
      <MyBadge color="success" text="wow!" />
      <BookList arr={scifi} />
    </div>
  );
}

export default App;
