import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import MyPage from "../pages/MyPage";

function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
	  <Route path="/Home" element={<Home />} />
	  <Route path="/Detail" element={<DetailPage />} />
	  <Route path="/MyPage" element={<MyPage />} />
    </Routes>
    </BrowserRouter>
  );
}
export default Router;
