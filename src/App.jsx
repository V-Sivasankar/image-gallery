import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import GalleryPage from "./pages/GalleryPage";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={
              <>
                <main className="hero">

                  <div className="hero-content">

                    <p>DISCOVER • EXPLORE • WANDER</p>

                    <h1>
                      Capture the <span>world</span> 🌍
                    </h1>

                    <p className="hero-description">
                      Explore the world through beautiful images.
                    </p>

                    <Link to="/gallery" className="explore-btn">
                      Explore Gallery →
                    </Link>

                  </div>

                </main>
              </>
            }
          />

          <Route
            path="/gallery"
            element={<GalleryPage />}
          />

        </Routes>
         
        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;