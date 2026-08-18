import { useState } from "react";
import images from "../data/images";

function Gallery() {

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredImages = images.filter((item) => {

    const matchesCategory =
      selectedCategory === "all" ||
      item.category === selectedCategory;

    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });


  return (
    <section className="gallery" id="gallery">

      <div className="gallery-heading">

        <p>EXPLORE THE WORLD</p>

        <h2>Our Travel Gallery</h2>

        <span>
          Discover beautiful destinations through our collection
          of travel photographs.
        </span>

      </div>

      {/* Categories */}

      <div className="category-buttons">

        <button
          className={selectedCategory === "all" ? "active" : ""}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </button>

        <button
          className={selectedCategory === "nature" ? "active" : ""}
          onClick={() => setSelectedCategory("nature")}
        >
          🌿 Nature
        </button>

        <button
          className={selectedCategory === "beach" ? "active" : ""}
          onClick={() => setSelectedCategory("beach")}
        >
          🏖️ Beaches
        </button>

        <button
          className={selectedCategory === "mountain" ? "active" : ""}
          onClick={() => setSelectedCategory("mountain")}
        >
          ⛰️ Mountains
        </button>

        <button
          className={selectedCategory === "city" ? "active" : ""}
          onClick={() => setSelectedCategory("city")}
        >
          🌆 Cities
        </button>

        <button
          className={selectedCategory === "historical" ? "active" : ""}
          onClick={() => setSelectedCategory("historical")}
        >
          🏛️ Historical
        </button>

        <button
          className={selectedCategory === "wildlife" ? "active" : ""}
          onClick={() => setSelectedCategory("wildlife")}
        >
          🐘 Wildlife
        </button>

      </div>


      {/* Gallery */}

      <div className="gallery-grid">

        {filteredImages.length > 0 ? (

          filteredImages.map((item) => (

            <div className="gallery-card" key={item.id}>

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="image-overlay">

                <h3>{item.title}</h3>

                <p>{item.category}</p>

              </div>

            </div>

          ))

        ) : (

          <p className="no-results">
            No destinations found 😔
          </p>

        )}

      </div>

    </section>
  );
}

export default Gallery;