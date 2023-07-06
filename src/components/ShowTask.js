import React from "react";

const ShowTask = () => {
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">0</span>
        </div>
        <button className="clearAll">Clear All</button>
      </div>

      <ul>
        <li>
          <p>
            <span></span>
            <span></span>
          </p>
        </li>
      </ul>
    </section>
  );
};

export default ShowTask;
