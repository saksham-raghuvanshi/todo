import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";

import "./App.css";
import "./style/addtask.css";
import "./style/showTask.css";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTask taskList={taskList} setTaskList={setTaskList} />
        <ShowTask taskList={taskList} setTaskList={setTaskList} />
      </div>
    </div>
  );
}

export default App;
