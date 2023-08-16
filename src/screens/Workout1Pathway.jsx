import React, { useState } from "react";
import axios from "axios";
import ExcerciseDuration from "../components/ExcerciseDurations";
import Accordion from "../components/NewAccordion";

const WorkoutVideos = () => {
  const [duration, setDuration] = useState("");
  const [videos, setVideos] = useState([]);

  
  // ... (component logic remains the same)
  const fetchWorkoutVideos = async () => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            key: "",
            q:  `${duration} minute at home workout`,
            type: "video",
            part: "snippet",
            maxResults: 20, // You can change the number of results here
          },
        }
      );
  
      setVideos(response.data.items);
    } catch (error) {
      console.error("Error fetching workout videos:", error);
    }
  };
  


  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWorkoutVideos();
  };
  

  return (
    <div className="container mx-auto mt-8">
    
      <form className="flex flex-col justify-center mb-4 border-2 rounded p-5 text-lg font-medium mx-auto" onSubmit={handleSubmit}>
        <label className="mr-4 text-white flex flex-col">
          <h1>Enter workout duration (in minutes):</h1>
          <input
            type="number"
            className="border rounded py-1"
            value={duration}
            onChange={handleDurationChange}
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded w-3/5 mx-auto"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video.id.videoId} className="bg-white rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-semibold mb-2">{video.snippet.title}</h2>
            <p className="text-gray-600">{video.snippet.description}</p>
            <div className="embed-responsive aspect-ratio-16/9 mt-4">
              <iframe
                title={video.snippet.title}
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      <Accordion />
    </div>
  );
};

export default WorkoutVideos;
