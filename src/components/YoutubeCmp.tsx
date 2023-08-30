import YouTube, { YouTubeProps } from "react-youtube";
import { Video } from "../../typings";

interface Props {
  id?: Video;
  name?: Video;
  key: Video;
  type?: Video;
  site?: Video;
}

const YoutubeCmp = ({ id, name, key, site, type }: Props) => {
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
  return <YouTube videoId={`${key}`} opts={opts} onReady={onPlayerReady} />;
};

export default YoutubeCmp;
