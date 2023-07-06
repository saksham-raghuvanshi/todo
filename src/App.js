import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";

import "./App.css";
import "./style/addtask.css";
import "./style/showTask.css";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <div className="container">
          <Header />
          <AddTask />
          <ShowTask />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
