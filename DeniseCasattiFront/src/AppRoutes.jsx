import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import MyResume from "./MyResume";
import MyStory from "./MyStory";
import MyWork from "./MyWork";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/MyWork" element={<MyWork />} />
      <Route path="/MyStory" element={<MyStory />} />
      <Route path="/MyResume" element={<MyResume />} />
    </Routes>
  );
}

export default AppRoutes;