import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import WriteAreticle from "./pages/WriteAreticle";
import BlogTittles from "./pages/BlogTittles";
import GenerateImages from "./pages/GenerateImages";
import RemoveBackground from "./pages/RemoveBackground";
import RemoveObject from "./pages/RemoveObject";
import ReviewResume from "./pages/ReviewResume";
import Community from "./pages/Community";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* AI Dashboard */}
        <Route path="/ai" element={<Layout />} />

        {/* AI Tools */}
        <Route path="/ai/dashboard" element={<Dashboard />} />

        <Route path="/ai/write-article" element={<WriteAreticle />} />

        <Route path="/ai/blog-titles" element={<BlogTittles />} />

        <Route path="/ai/generate-images" element={<GenerateImages />} />

        <Route path="/ai/remove-background" element={<RemoveBackground />} />

        <Route path="/ai/remove-object" element={<RemoveObject />} />

        <Route path="/ai/review-resume" element={<ReviewResume />} />

        <Route path="/ai/community" element={<Community />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
