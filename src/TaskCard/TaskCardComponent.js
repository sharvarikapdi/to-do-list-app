import React from 'react';
import './TaskCardStyle.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faSquare, faCheckSquare} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add( faSquare, faCheckSquare);
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
            <FontAwesomeIcon className="checked" icon={faCheckSquare} />
            <input type="checkbox" id="item1" className="itemCheckbox checked" name={listHeading}/>
            <span className="itemText">Thing 1</span>
          </label>
          <label for="item2" className="item">
            <FontAwesomeIcon className="unchecked" icon={faSquare} />
            <input type="checkbox" id="item2" className="itemCheckbox" name={listHeading}/>
            <span className="itemText">Thing 2</span>
          </label>
        </div>
      </div>
    );
  }
}
export default TaskCard
