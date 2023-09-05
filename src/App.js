import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import "./App.css";

function App() {
  // for the purposes of re-rendering with the feteched data use state
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    setImages(await searchImages(term));
  };

  return (
    <section className="container">
      <div className="image-grid">
        <SearchBar onSubmit={handleSubmit} />
        <ImageList images={images} />
      </div>
    </section>
  );
}

export default App;
