import "./form.css";
// import { useState } from "react";

const Form = (props) => {
  // const [task, setTask] = useState("");

  return (
    <form onSubmit={props.submit} className="form">
      <label htmlFor="task">Task</label>
      <input className="inputs" type="text" name="task" id="task" />

      <label htmlFor="action">Choose an action</label>
      <select className="inputs" name="actions" id="action">
        <option>-- Select option --</option>
        <option value="do">Do</option>
        <option value="schedule">Schedule</option>
        <option value="delegate">Delegate</option>
        <option value="ignore">Ignore</option>
      </select>
      <button>Create Task</button>
    </form>
  );
};

export default Form;
