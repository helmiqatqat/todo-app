import React, { useEffect, useState, useContext } from "react";
import './index.css'
import List from "../List/index.js";
import { v4 as uuid } from "uuid";
import { SettingsContext } from "../../context/Settings";
import { Slider } from '@mantine/core';


const ToDo = () => {
  const settings = useContext(SettingsContext);
  const [difficulty, setDifficulty] = settings.difficulty;
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [formData, setFormData] = useState({
    id: uuid(),
    details: '',
    assignee: '',
    difficulty: difficulty,
    complete: false,
  })
  console.log(list)
  function handleSubmit(e) {
    e.preventDefault();
    setList([...list, formData]);
    setFormData({
      id: uuid(),
      details: '',
      assignee: '',
      difficulty: difficulty,
      complete: false,
    })
  }
  function handleChange(e) {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }
  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [incomplete, list]);

  return (
    <div className="main-container">
      <header>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>
      <div className="tasks-container">
        <form onSubmit={handleSubmit} className="add-form">
          <h2>Add To Do Item</h2>

          <label>
            <span>To Do Item</span>
            <input
              onChange={handleChange}
              value={formData.details}
              name="details"
              type="text"
              placeholder="Item Details"
            />
          </label>

          <label>
            <span>Assigned To</span>
            <input
              onChange={handleChange}
              name="assignee"
              value={formData.assignee}
              type="text"
              placeholder="Assignee Name"
            />
          </label>
          <label>
            <span>Difficulty</span>
            <Slider
              value={formData.difficulty}
              min={1}
              max={5}
              label={null}
              name="difficulty"
              onChange={handleChange}
              styles={{
                thumb: {
                  transition: 'opacity 150ms ease',
                },
              }}
            />
          </label>
            <button type="submit">Add Item</button>
        </form>
        {list && <List list={list} toggleComplete={toggleComplete} deleteItem={deleteItem}/>}
      </div>
    </div>
  );
};

export default ToDo;
