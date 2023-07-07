import React from "react";

const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  // const tasks = [
  //   {
  //     id: 1001,
  //     name: "Task A",
  //     time: "2:09:01 AM 7/7/23",
  //   },
  //   {
  //     id: 1002,
  //     name: "Task B",
  //     time: "2:09:01 AM 7/7/23",
  //   },
  //   {
  //     id: 1003,
  //     name: "Task C",
  //     time: "2:09:01 AM 7/7/23",
  //   },
  // ];

  const handleEdit = (id) => {
    const selectedTask = taskList.find((todo) => todo.id === id);
    setTask(selectedTask);
  };

  const handleDelete = (id) => {
    const updatedTask = taskList.filter((todo) => todo.id !== id);
    setTaskList(updatedTask);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button
          className="clearAll"
          onClick={() => {
            setTaskList([]);
          }}
        >
          Clear All
        </button>
      </div>

      <ul>
        {taskList.map((todo) => (
          <li>
            <p>
              <span>{todo.name}</span>
              <span>{todo.time}</span>
            </p>
            <i
              onClick={() => handleEdit(todo.id)}
              className="bi bi-pencil-square"
            ></i>
            <i
              onClick={() => handleDelete(todo.id)}
              className="bi bi-trash"
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
