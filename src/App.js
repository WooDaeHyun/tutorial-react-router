import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      {/* 모든 페이지에 보이고 싶으면 Routs 컴포넌트 바깥 영역에서 장석하면 된다 */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 주소가 /일때는 Home 컴포넌트를 */}
        <Route path="/about" element={<About />} />
        {/* 주소가 /about 일때는 About 컴포넌트를 */}
      </Routes>
    </div>
  );
}

export default App;
