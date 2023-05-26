import {
  Stack,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Video = ({ videos }) => {
  console.log(videos);
  return (
    <>
      <Grid container spacing={2}>
        {videos.map((video, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box key={index}>
              {video.id.videoId && <VideoCard video={video} />}
              {video.id.channelId && <ChannelCard video={video} />}
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Video;
