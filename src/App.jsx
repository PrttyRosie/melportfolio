import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./components/Projects";
import { Toaster } from "./components/ui/toaster";

function App() {

  return (
  <>
    <Toaster />
    <BrowserRouter>
    <Routes>
      <Route index element={ <Home /> }/>
      <Route path="#projects" element={<Projects />} />
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
