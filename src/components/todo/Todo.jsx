import { useEffect } from "react";
import { When } from "react-if";
import useForm from "../../hooks/form.jsx";
import "./todo.scss";
import { SettingsContext } from "../../context/settings/Settings";
import { useContext } from "react";
import List from "../list/List.jsx";
import Auth from "../Auth/Auth.jsx";
import { LoginContext } from "../Auth/LoginContext.jsx";

const ToDo = () => {
  const state = useContext(SettingsContext);
  const state2 = useContext(LoginContext);

  const { handleChange, handleSubmit } = useForm(
    state.addItem,
    state.defaultValues
  );
  useEffect(() => {
    let incompleteCount = state.list.filter((item) => !item.complete).length;
    state.setIncomplete(incompleteCount);
    document.title = `To Do List: ${state.incomplete}`;
  }, [state]);
  return (
    <When condition={state2.loggedIn}>
      <div className="todoContainer">
        <header>
          <h1>To Do List: {state.incomplete} items pending</h1>
        </header>
        <div className="contain">
          <Auth capability="create">
            <form onSubmit={handleSubmit} className="form">
              <h2>Add To Do Item</h2>

              <label className="input_box">
                <input
                  onChange={handleChange}
                  name="text"
                  type="text"
                  placeholder="Item Details"
                />
                <span>To Do Item</span>
              </label>

              <label className="input_box">
                <input
                  onChange={handleChange}
                  name="assignee"
                  type="text"
                  placeholder="Assignee Name"
                />
                <span>Assigned To</span>
              </label>

              <label className="input_box">
                <input
                  onChange={handleChange}
                  defaultValue={state.defaultValues.difficulty}
                  type="range"
                  min={1}
                  max={5}
                  name="difficulty"
                />
                <span>Difficulty</span>
              </label>

              <label>
                <button type="submit" className="addButton">
                  Add Item
                </button>
              </label>
            </form>
          </Auth>
          <div className="tasksContain">
            <List />
          </div>
        </div>
      </div>
    </When>
  );
};

export default ToDo;
