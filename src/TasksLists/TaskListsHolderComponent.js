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
    const items = []
    const elements = [{listName:'List 1'}];
    for (const [index, value] of elements.entries()) {
      items.push(<TaskCard key={value} />)
    }
    return (
      <section className="taskListsHolder">
        {items}
      </section>
    );
  }
  addList() {
    console.log('Add list');
  }
}
export default TaskListsHolder
