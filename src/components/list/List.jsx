import PaginationSlider from "./PaginationSlider";
import { SettingsContext } from "../../context/settings/Settings";
import { useContext } from "react";
import "../todo/todo.scss";
import Auth from "../Auth/Auth";

const List = () => {
  const state = useContext(SettingsContext);

  const startIndex = (state.page - 1) * state.numOfTasks;
  const endIndex = startIndex + state.numOfTasks;

  return (
    <>
      {state.list
        .sort((a, b) => {
          if (state.sortStandard === "difficulty") {
            return b.difficulty - a.difficulty;
          }
          if (state.sortStandard === "completion") {
            return b.complete - a.complete;
          }
        })
        .filter((item, index) => index >= startIndex && index < endIndex)
        .map(
          (item) =>
            item.hide && (
              <div key={item.id} className="task">
                <div className="checkContain">
                  <Auth capability="delete">
                    <div
                      className={item.mode}
                      onClick={() => state.toggleComplete(item.id)}
                    >
                      {item.complete ? "Completed" : "Pending"}
                    </div>
                  </Auth>
                  <p>
                    <small>
                      <b>{item.assignee}</b>
                    </small>
                  </p>
                  <Auth capability="delete">
                    <span
                      className="close"
                      onClick={() => state.closeHandle(item.id)}
                    >
                      X
                    </span>
                  </Auth>
                </div>
                <p className="text">{item.text}</p>
                <p className="difficulty">
                  <small>Difficulty: {item.difficulty}</small>
                </p>
              </div>
            )
        )}
      {state.list.length != 0 && <PaginationSlider />}
    </>
  );
};

export default List;
