import { BrowserRouter, Route, Routes } from "react-router-dom";
import { path } from "./constants/path";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={path.home} element={<Home />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
