import { BrowserRouter, Routes, Route } from "react-router-dom";

//# LAYOUT
import DefaultLayout from "./layouts/DefaultLayout";

//# PAGES
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import ShowPosts from "./pages/posts/ShowPosts";
import DeletePosts from "./pages/posts/DeletePosts";
import IndexPosts from "./pages/posts/IndexPosts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={Homepage} />
          <Route path="/chi siamo" Component={About} />
          <Route path="/posts">
            <Route index Component={IndexPosts} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
