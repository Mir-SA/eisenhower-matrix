import "./matrix.css";
import Action from "./Action";

const Matrix = (props) => {
  return (
    <section className="matrix-container">
      <Action
        className="action1"
        section="do"
        action={props.action}
        taskTitle={props.taskTitle}
      />
      <Action
        className="action2"
        section="schedule"
        action={props.action}
        taskTitle={props.taskTitle}
      />
      <Action
        className="action3"
        section="delegate"
        action={props.action}
        taskTitle={props.taskTitle}
      />
      <Action
        className="action4"
        section="ignore"
        action={props.action}
        taskTitle={props.taskTitle}
      />
    </section>
  );
};

export default Matrix;
