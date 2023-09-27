import React from "react";
export const SettingsContext = React.createContext();
import { useState } from "react";
import { v4 as uuid } from "uuid";

const Settings = (props) => {
  const savedChecked =
    localStorage.getItem("checked") === "true" ? true : false;
  const savednumOfTasks = parseInt(localStorage.getItem("numOfTasks"));
  const savedSortStandard = localStorage.getItem("sortStandard");

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [defaultValues] = useState({
    difficulty: 3,
  });
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(0);
  const [numOfTasks, setNumOfTasks] = useState(3);
  const [sortStandard, setSortStandard] = useState("difficulty");
  const [checked, setChecked] = useState(false);
  const [alert, setAlert] = useState(false);
  const [reset, setReset] = useState(false);
  const state = {
    sortStandard: savedSortStandard || sortStandard,
    setSortStandard: setSortStandard,
    numOfTasks: savednumOfTasks || numOfTasks,
    setNumOfTasks: setNumOfTasks,
    checked: savedChecked || checked,
    setChecked: setChecked,
    items: numOfPages,
    setNumOfPages: setNumOfPages,
    page: page,
    setPage: setPage,
    list: list,
    setList: setList,
    incomplete: incomplete,
    setIncomplete: setIncomplete,
    defaultValues: defaultValues,
    addItem: addItem,
    deleteItem: deleteItem,
    toggleComplete: toggleComplete,
    closeHandle: closeHandle,
    updateSettings: updateSettings,
    resetSettings: resetSettings,
    alert: alert,
    reset: reset,
  };

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    item.mode = "red";
    item.hide = true;
    console.log(item);
    setList([...list, item]);
    if (list.length % (savednumOfTasks || state.numOfTasks) === 0) {
      setNumOfPages(numOfPages + 1);
    }
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
        item.mode = item.mode === "red" ? "green" : "red";
        if (!(savedChecked || checked)) {
          item.hide = item.mode === "red" ? true : false;
          if ((list.length % (savednumOfTasks || state.numOfTasks)) - 1 === 0) {
            setNumOfPages(numOfPages - 1);
          }
        }
      }
      return item;
    });
    setList(items);
    if (!(savedChecked || checked)) {
      deleteItem(id);
    }
  }

  function closeHandle(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.hide = false;
      }
      return item;
    });
    if ((list.length % (savednumOfTasks || state.numOfTasks)) - 1 === 0) {
      setNumOfPages(numOfPages - 1);
    }
    setList(items);
    deleteItem(id);
  }
  function updateSettings() {
    localStorage.setItem("checked", JSON.stringify(checked));
    localStorage.setItem("numOfTasks", JSON.stringify(numOfTasks));
    localStorage.setItem("sortStandard", sortStandard);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }
  function resetSettings() {
    localStorage.clear();
    setReset(true);
    setTimeout(() => {
      setReset(false);
    }, 3000);
    return;
  }

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
};

export default Settings;
