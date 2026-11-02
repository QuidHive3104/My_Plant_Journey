import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import UserLevel from './pages/UserLevel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user-level" element={<UserLevel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;