import React from 'react';
import './TaskListsHolder.css';
import TaskCard from '../TaskCard/TaskCardComponent.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add( faPlusSquare);
class TaskListsHolder extends React.Component {
  render() {
    return (
      <section className="taskListsHolder">
        <div className="addBtn" onClick={this.addList}>
          <span><FontAwesomeIcon className="addBtnIcon" icon="plus-square" /></span> <span className="btnText"> Add list</span>
        </div>
        <TaskCard />
      </section>
    );
  }
  addList() {
    console.log('Add list');
  }
}
export default TaskListsHolder
