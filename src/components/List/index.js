import { useEffect, useState, useContext } from "react";
import { Pagination } from "@mantine/core";
import ListItem from "./ListItem";
import { SettingsContext } from "../../context/Settings";
import "./index.css";

export default function List({ list, toggleComplete, deleteItem }) {
  const [activePage, setPage] = useState(1);
  const [showedList, setShowList] = useState(list);
  const settings = useContext(SettingsContext);
  const [offset, setOffset] = settings.offset;

  useEffect(() => {
    if (list?.length >= 3) {
      const currList = [];
      for (let i = (activePage - 1) * offset; i < (activePage - 1) * offset + offset; i++) {
        if (list[i]) {
          currList.push(list[i]);
        }
      }
      setShowList(currList);
    } else {
      setShowList(list);
    }
  }, [list, activePage, offset]);
  return (
    <>
      <div className={list ? "tasks-list" : ""}>
        {showedList &&
          showedList.map((item, idx) => (
            <ListItem
              key={idx}
              item={item}
              toggleComplete={toggleComplete}
              deleteItem={deleteItem}
            />
          ))}
        <Pagination
          value={activePage}
          onChange={setPage}
          total={Math.ceil((list?.length || 0) / 3)}
          withEdges
          className="pagination"
        />
      </div>
    </>
  );
}
