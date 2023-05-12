import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Index />} />
      </Routes>
    </Router>
  );
};

export default App;
