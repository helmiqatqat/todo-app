import React from "react";
import Header from "./components/Header/index.js";
import ToDo from "./components/Todo/index.js";
import List from "./components/List/index.js";
import Footer from "./components/Footer/index.js";
import SettingsProvider from "./context/Settings/index.js";

export default function App() {
  return (
    <>
      <SettingsProvider>
        <Header />
        <div className="todo-container">
          <ToDo />
          <List />
        </div>
        <Footer />
      </SettingsProvider>
    </>
  );
}
