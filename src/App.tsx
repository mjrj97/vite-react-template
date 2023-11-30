import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<>This page doesn't exist</>} />
    </Routes>
  );
}

export default App;
