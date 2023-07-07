import React from "react";

const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handlesubmit = (ev) => {
    ev.preventDefault();
    const date = new Date();
    const newTask = {
      id: date.getTime(),
      name: ev.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };

    setTaskList([...taskList, newTask]);
    ev.target.task.value = "";
  };
  return (
    <section>
      <div className="addTask">
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            name="task"
            autoComplete="off"
            placeholder="add task"
            maxLength="25"
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
    </section>
  );
};

export default AddTask;
