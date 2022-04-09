function Action(props) {
  const getData = () => {
    let keys = Object.keys(localStorage);
    // console.log(keys);

    for (let key of keys) {
      console.log(`${key}: ${localStorage.getItem(key)}`);
    }
  };

  getData();
  return (
    <div>
      <h3>{props.section}</h3>
      <p>{props.section === props.action ? props.taskTitle : ""}</p>
    </div>
  );
}

export default Action;
