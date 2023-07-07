import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";

import "./App.css";
import "./style/addtask.css";
import "./style/showTask.css";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState({});
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTask
          taskList={taskList}
          setTaskList={setTaskList}
          task={task}
          setTask={setTask}
        />
        <ShowTask
          taskList={taskList}
          setTaskList={setTaskList}
          task={task}
          setTask={setTask}
        />
      </div>
    </div>
  );
}

export default App;
