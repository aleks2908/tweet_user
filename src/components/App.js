// import {Card} from "./Card/Card"
// import logo from "./logo.svg";
// import "./App.css";
import "modern-normalize";

// import { Card } from "../components/Card/Card";
import { CardList } from "./CardList/CardList";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <CardList />
        {/* <Card /> */}
      </main>
    </div>
  );
}

export default App;
