import React, { useState } from "react";
import axios from "axios";

const WorkoutVideos = () => {
  const [duration, setDuration] = useState("");
  const [videos, setVideos] = useState([]);

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const fetchWorkoutVideos = async () => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            key: "AIzaSyDTAJXtdNyPbl3OcQfZpITO22Ug012okVs",
            q: "at home workout",
            type: "video",
            part: "snippet",
            videoDuration: `PT${duration}M`, // PT indicates duration format, M indicates minutes
            maxResults: 10, // You can change the number of results here
          },
        }
      );

      setVideos(response.data.items);
    } catch (error) {
      console.error("Error fetching workout videos:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWorkoutVideos();
  };

  return (
    <div className="container mx-auto mt-8">
      <form className="mb-4" onSubmit={handleSubmit}>
        <label className="mr-4">
          Enter workout duration (in minutes):
          <input
            type="number"
            className="border rounded px-2 py-1 ml-2"
            value={duration}
            onChange={handleDurationChange}
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
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
    </div>
  );
};

export default WorkoutVideos;
