import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import MyPage from "../pages/MyPage";
import PostPage from "../pages/PostPage";
import NotFound from "../pages/NotFound";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={process.env.PUBLIC_URL+"/"} element={<Home />} />
        <Route path={process.env.PUBLIC_URL+"/Home"} element={<Home />} />
        <Route path={process.env.PUBLIC_URL+"/Detail/:id"} element={<DetailPage />} />
        <Route path={process.env.PUBLIC_URL+"/MyPage"} element={<MyPage />} />
        <Route path={process.env.PUBLIC_URL+"/PostPage"} element={<PostPage />} />
        <Route path={process.env.PUBLIC_URL+"/PostPage/:id"} element={<PostPage />} />
        <Route path={process.env.PUBLIC_URL+"/NotFound"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
