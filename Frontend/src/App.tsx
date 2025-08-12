import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
