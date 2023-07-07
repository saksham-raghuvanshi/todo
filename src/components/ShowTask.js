import React from "react";

const ShowTask = ({ taskList, setTaskList }) => {
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
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">0</span>
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
        {taskList.map((task) => (
          <li>
            <p>
              <span>{task.name}</span>
              <span>{task.time}</span>
            </p>
            <i className="bi bi-pencil-square"></i>
            <i className="bi bi-trash"></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
