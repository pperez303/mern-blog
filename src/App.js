import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

// Components
import NavBar from './components/common/nav/NavBar';

// Pages
import BlogPage from "./pages/blog_page/BlogPage";
import AboutPage from "./pages/about_page/AboutPage";
import ContactPage from './pages/contact_page/ContactPage';
import PostPage from "./pages/post_page/PostPage";
import './app.css';

function App() {
  return (

    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<BlogPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/post/:postId" element={<PostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
