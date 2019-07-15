import React from 'react';
import './TaskCardStyle.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faSquare, faCheckSquare} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add( faSquare, faCheckSquare);
const listHeading = 'List Name 1'
class TaskCard extends React.Component {

  handleChange(e) {
    console.log(e);
    e.currentTarget.className = e.currentTarget.checked == true ? 'itemCheckbox checked' : 'itemCheckbox'
  }

  render() {
    const items = []
    const elements = [
      {
        itemVal:'checked',
        itemText : 'Thing 1'
      },
      {
        itemVal:'unchecked',
        itemText : 'Thing 2'
      }
    ];
    for (const [index, value] of elements.entries()) {
      items.push(<label htmlFor="item1" className="item">
        <FontAwesomeIcon className="checked" icon={faCheckSquare} />
        <input type="checkbox" id="item{index}" className="itemCheckbox checked" name={listHeading}/>
        <span className="itemText">Thing 1</span>
      </label>)
    }
    return (
      <div className="listCard">
        <header className="listCardHeader">
          <h1>{listHeading}</h1>
        </header>
        <div className="listDisplay">
          <label htmlFor="item1" className="item">
            <FontAwesomeIcon className="checked" icon={faCheckSquare} />
            <input type="checkbox" id="item1" className="itemCheckbox checked" name={listHeading} onChange={this.handleChange}/>
            <span className="itemText">Thing 1</span>
          </label>
          <label htmlFor="item2" className="item">
            <FontAwesomeIcon className="unchecked" icon={faSquare} />
            <input type="checkbox" id="item2" className="itemCheckbox" name={listHeading} onChange={this.handleChange}/>
            <span className="itemText">Thing 2</span>
          </label>
        </div>
      </div>
    );
  }
}
export default TaskCard
