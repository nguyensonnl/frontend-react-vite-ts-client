import UseState from "./pages/UseState";
import UseEffect from "./pages/UseEffect";
import UseContext from "./pages/UseContext";
import ReactMemo from "./pages/ReactMemo";
import UseMemo from "./pages/UseMemo";
import UseCallBack from "./pages/UseCallBack";
import UseRef from "./pages/UseRef";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Welcome webiste</div>} />
        <Route path="/useState" element={<UseState />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/useContext" element={<UseContext />} />
        <Route path="/ReactMemo" element={<ReactMemo />} />
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="/useCallback" element={<UseCallBack />} />
        <Route path="/useRef" element={<UseRef />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
