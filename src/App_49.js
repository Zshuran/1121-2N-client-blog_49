import { BrowserRouter, Routes, Route } from 
"react-router-dom";

import Homepage_49 from "./pages/Homepage_49";
import BlogNodeServer_49 from "./pages/BlogNodeServer_49";
import BlogStaticPage_49 from "./pages/BlogStaticPage_49";
import BlogSupabase_49 from "./pages/BlogSupabase_49";

const App_49 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage_49 />} />
        <Route path='/static_49' element={<BlogStaticPage_49 />} />
        <Route path='/node_49' element={<BlogNodeServer_49/>} />
        <Route path='/supa_49' element={<BlogSupabase_49/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App_49;
