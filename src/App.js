// ci/cd configure in the droplet ~/backend-apps/api-action-runner/

import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

// Components
import NavBar from './components/common/nav/NavBar';
import ScrollToTop from './components/common/scroll_to_top/ScrollToTop';

// Pages
import HomePage from "./pages/home_page/HomePage";
import BlogPage from "./pages/blog_page/BlogPage";
import AboutPage from "./pages/about_page/AboutPage";
import ContactPage from './pages/contact_page/ContactPage';
import PostPage from "./pages/post_page/PostPage";
import './app.css';

function App() {
  return (

    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
      <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/blog" element={<BlogPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/post/:postId" element={<PostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
