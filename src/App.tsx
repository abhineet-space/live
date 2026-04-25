import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HashRedirect from "./components/HashRedirect";

function App() {
  return (
    <>
      <HashRedirect />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hire" element={<HomePage hire={true} />} />
        <Route path="/hire-me" element={<HomePage hire={true} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
