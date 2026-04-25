import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hire" element={<HomePage hire={true} />} />
      <Route path="/hire-me" element={<HomePage hire={true} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
