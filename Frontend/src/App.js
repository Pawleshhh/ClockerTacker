import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicPage from './components/pages/public/PublicPage';
import UserPage from './components/pages/user/UserPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicPage/>} />
        <Route path="/user/*" element={<UserPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
