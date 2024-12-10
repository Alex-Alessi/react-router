import { BrowserRouter, Routes, Route } from "react-router-dom";

//# LAYOUT
import DefaultLayout from "./layouts/DefaultLayout";

//# PAGES
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import PostsList from "./pages/PostsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={Homepage} />
          <Route path="/chi siamo" Component={About} />
          <Route path="/postsList" Component={PostsList} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
