import React from "react";

const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handlesubmit = (ev) => {
    ev.preventDefault();
    if (task.id) {
      const date = new Date();
      const updateTask = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );

      setTaskList(updateTask);
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: ev.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };

      setTaskList([...taskList, newTask]);
      ev.target.task.value = "";
    }
  };
  return (
    <section>
      <div className="addTask">
        <form onSubmit={handlesubmit}>
          <input
            value={task.name}
            type="text"
            name="task"
            autoComplete="off"
            placeholder="add task"
            maxLength="25"
            onChange={(e) => setTask({ ...task, name: e.target.value })}
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
    </section>
  );
};

export default AddTask;
