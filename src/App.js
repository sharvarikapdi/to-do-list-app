import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskListsHolder from './TasksLists/TaskListsHolderComponent.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, faCheckSquare, faTasks);
function App() {
  return (
    <div className = "App" >
    <header>
      <span><FontAwesomeIcon className="Main-logo" icon="tasks" /></span>
      <span className="Main-header">Tasks lists</span>
    </header>
    <section id="TaskHolder">
      <TaskListsHolder/>
    </section>
    {/*<header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>*/}

    </div>
  );
}

export default App;
