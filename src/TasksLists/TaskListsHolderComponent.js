import React from 'react';
import './TaskListsHolder.css';
import TaskCard from '../TaskCard/TaskCardComponent.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MetisMenu from 'react-metismenu';

library.add( faPlusSquare);
class TaskListsHolder extends React.Component {
  render() {
    return (
      <section className="taskListsHolder">
        <TaskCard />
      </section>
    );
  }
  addList() {
    console.log('Add list');
  }
}
export default TaskListsHolder
