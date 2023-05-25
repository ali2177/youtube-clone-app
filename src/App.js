import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./component/Navbar";
import Feed from "./component/Feed";
import VideoDetail from "./component/VideoDetail";
import ChannelDetail from "./component/ChannelDetail";
import SearchFeed from "./component/SearchFeed";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" exact element={<VideoDetail />} />
          <Route path="/channel/:id" exact element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
