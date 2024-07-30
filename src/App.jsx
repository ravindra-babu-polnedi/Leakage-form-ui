import "./App.css";
import SplitScreen from "./components/SplitScreen";
import Navigation from "./components/Navigation";
import Content from "./components/Content";

function App() {
  return (
    <SplitScreen>
      <Navigation />
      <Content />
    </SplitScreen>
  );
}

export default App;
