import {
  Stack,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Video = ({ videos }) => {
  console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((video, index) => (
        <Box key={index}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard video={video} />}
        </Box>
      ))}
      <Box></Box>
    </Stack>
  );
};

export default Video;
