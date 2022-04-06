import styles from "./NewTask.module.scss";

import { minusI, deleteI } from "../UI/icons";
import { useState } from "react";

// TODO: #9 insert date and time. Both fields appear after click on inputbox
// TODO: #10 create a new task when some text is typed into input box and ENTER key is press
// TODO: #14 For new tasks, today date will become default date

function NewTask(props) {
  const [titleValue, setTitleValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [timeValue, setTimeValue] = useState("");

  const handlerOnChangeTitle = function (event) {
    setTitleValue(event.target.value);
  };

  const handlerOnChangeDate = function (event) {
    setDateValue(event.target.value);
  };

  const handlerOnChangeTime = function (event) {
    setTimeValue(event.target.value);
  };

  const handlerCleanInput = function (event) {
    setTitleValue("");
    setDateValue("");
    setTimeValue("");
  };

  const handlerOnKeyDown = function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();

      const task = {
        title: titleValue,
        date: new Date(`${dateValue}T${timeValue}`),
      };
      props.onSaveTask(task);
      setTitleValue("");
      setDateValue("");
      setTimeValue("");
    }
  };

  return (
    <form className="bigWrapper">
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="New Task"
          value={titleValue}
          required
          className={styles.input}
          onChange={handlerOnChangeTitle}
          onKeyDown={handlerOnKeyDown}
        />
        <img
          src={deleteI.imageSRC}
          alt={deleteI.alt}
          className={styles.deleteIcon}
          onClick={handlerCleanInput}
        />
      </div>
      <div className={styles.dateTimeWrapper}>
        <input
          className={styles.date}
          type="date"
          value={dateValue}
          onChange={handlerOnChangeDate}
        />
        <input
          className={styles.time}
          type="time"
          value={timeValue}
          min="00:00"
          max="11:59"
          onChange={handlerOnChangeTime}
        />
      </div>
    </form>
  );
}

export default NewTask;
