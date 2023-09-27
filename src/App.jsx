
import { Route, Routes, } from "react-router-dom";

import { SettingsProvider } from './components/context/SettingsProvider';
import ToDo from './components/todo/todo'; // Your existing ToDo component
import SettingsPage from './components/settingPage/settings';

function App() {
  return (
    <SettingsProvider>
        <Routes>
            <Route path='/' element={<ToDo />} />
       
            <Route path='/settings' element={<SettingsPage />} />       
      </Routes>
    </SettingsProvider>
  );
}

export default App;
