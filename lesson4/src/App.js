import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainPage from './pages/mainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <MainPage/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;