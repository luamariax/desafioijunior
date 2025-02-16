import { useState, useEffect } from "react";
import axios from "axios";
import { Heart, Trash } from "lucide-react";

const API_URL = "http://localhost:3000"; // Configuração da API

export default function ISpotify() {
  const [artists, setArtists] = useState([]);
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    fetchArtists();
  }, []);

  const fetchArtists = async () => {
    try {
      const { data } = await axios.get(${API_URL}/artists);
      setArtists(data);
    } catch (error) {
      console.error("Erro ao carregar artistas:", error);
    }
  };

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  const removeArtist = (id) => {
    setArtists((prevArtists) => prevArtists.filter((artist) => artist.id !== id));
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">ISpotify 🎵</h1>
      <div className="grid gap-4">
        {artists.map(({ id, image, name }) => (
          <div
            key={id}
            className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-md"
          >
            <img src={image} alt={name} className="w-16 h-16 rounded-full" />
            <span className="text-lg font-medium">{name}</span>
            <div className="flex gap-2">
              <button onClick={() => toggleFavorite(id)}>
                <Heart className={w-6 h-6 ${favorites[id] ? 'text-green-500' : 'text-gray-500'}} />
              </button>
              <button onClick={() => removeArtist(id)}>
                <Trash className="w-6 h-6 text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
