import { BrowserRouter, Route, Routes } from "react-router-dom";
import { path } from "./constants/path";
import Home from "./components/Home";
import Messages from "./components/Messages";
import Main from "./components/Main";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={path.home} element={<Home />}>
          <Route path={path.home} element={<Main />}></Route>
          <Route path={path.messages} element={<Messages />}></Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
