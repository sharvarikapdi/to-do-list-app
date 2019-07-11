import React from 'react';
import './TaskCardStyle.css';
const listHeading = 'List Name 1'
class TaskCard extends React.Component {
  render() {
    return (
      <div className="listCard">
        <header className="listCardHeader">
          <h1>{listHeading}</h1>
        </header>
        <div className="listDisplay">
          <label for="item1" className="item">
            <input type="checkbox" id="item1" className="itemCheckbox" name={listHeading}/>
            <span className="itemText">Thing 1</span>
          </label>
        </div>
      </div>
    );
  }
}
export default TaskCard
