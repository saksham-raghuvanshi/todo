import React from "react";

const AddTask = () => {
  return (
    <section>
      <div className="addTask">
        <form>
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
