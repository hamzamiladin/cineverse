import YouTube, { YouTubeProps } from "react-youtube";
import { Video } from "../../typings";

interface Props {
  cineverseVideos?: Video;
}

const YoutubeCmp = ({ cineverseVideos }: Props) => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <YouTube
      videoId={cineverseVideos?.key}
      title={cineverseVideos?.name}
      opts={opts}
      onReady={onPlayerReady}
      
    />
  );
};

export default YoutubeCmp;
