import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      {/* 모든 페이지에 보이고 싶으면 Routs 컴포넌트 바깥 영역에서 장석하면 된다 */}
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          {/* 주소가 /일때는 Home 컴포넌트를 */}
          <Route path="/about" element={<About />} />
          {/* 주소가 /about 일때는 About 컴포넌트를 */}
          <Route path="/profiles/:username" element={<Profile />} />
        </Route>
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
