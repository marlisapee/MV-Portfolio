import { Route, Routes } from 'react-router-dom';

import WelcomeView from './views/welcome-view/WelcomeView';
import HomeView from './views/home-view/HomeView';

function App() {
  return (
    <>
      <Routes>
        <Route path="/welcome" element={<WelcomeView />} />
        <Route path="/home" element={<HomeView />} />
      </Routes>
    </>
  );
}

export default App;
