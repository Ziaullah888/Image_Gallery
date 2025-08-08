import React, { useEffect, useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { ImageGrid } from "./components/ImageGrid";

const ACCESS_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("nature");
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(
          `https://api.unsplash.com/search/photos?query=${searchTerm}&page=${page}&client_id=${ACCESS_KEY}`
        );
        const data = await res.json();

        if (data.results.length === 0) {
          setError("No image found");
          setImages([]);
        } else {
          setError("");
        }
        setImages((prev) =>
          page === 1 ? data.results : [...prev, ...data.results]
        );
      } catch (error) {
        setError("Error fetching images");
      }
    };

    fetchImages();
  }, [searchTerm, page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SearchBar
        onSearch={(term) => {
          setSearchTerm(term);
          setPage(1);
          setImages([]);
        }}
      />
      {error && (
        <p className="text-red-400 text-center font-semibold text-3xl">
          {error}
        </p>
      )}
      <ImageGrid images={images} />
    </>
  );
}

export default App;
