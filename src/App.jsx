import { BrowserRouter, Routes, Route } from "react-router-dom";

//# PAGES
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import PostsList from "./pages/PostsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={Homepage} />
        <Route path="/chiSiamo" Component={About} />
        <Route path="/postsList" Component={PostsList} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
