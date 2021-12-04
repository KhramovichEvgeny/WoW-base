import "./App.css";
import Items from "./Items/Items";
import Header from "./Items/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="block">
        <Items />
      </div>
    </div>
  );
};

export default App;
