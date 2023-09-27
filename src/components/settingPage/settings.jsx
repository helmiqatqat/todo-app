// SettingsPage.js
import { useState } from "react";
import { useSettings } from "../context/SettingsProvider";
import { Button, Navbar, Switch } from "@mantine/core";

import "./settings.scss";
import Navba from "../Navbar/navbar";

function SettingsPage() {
  const { settings, updateSettings } = useSettings();

  const [displayItems, setDisplayItems] = useState(settings.displayItems);
  const [hideCompleted, setHideCompleted] = useState(settings.hideCompleted);

  const handleSaveSettings = (e) => {
    e.preventDefault();
    const newSettings = {
      ...settings,
      displayItems,
      hideCompleted,
    };
    updateSettings(newSettings);
  };

  return (

    <> <Navba /> <div className='settings-body'>
      

      <header className='settings-header'>
        <h1> ⚙️Manage Settings</h1>
      </header>

      <section className='settings-sections'>
        <form onSubmit={handleSaveSettings} className='settings-form'>
          <h2>Update Settings</h2>
          <label>
            <Switch
              labelPosition='left'
              label={<span>Hide Completed Items:</span>}
              size='md'
              onChange={(e) => setHideCompleted(e.target.checked)}
            />
          </label>

          <label>
            <span> Display Items:</span>
            <br />
            <input
              type='number'
              value={displayItems}
              onChange={(e) => setDisplayItems(Number(e.target.value))}
            />
          </label>
          <label>
            <span>Sotr Keyword</span>
            <br />
            <input
              onChange={() => {}}
              name='Keyword'
              type='text'
              placeholder='difficulty'
            />
          </label>

          <label>
            <Button type='submit'>Save</Button>
          </label>
        </form>
      </section>

      <section></section>
    </div>
    </>
  
  );
}

export default SettingsPage;
