import backgroundVideo from "../assets/background.mp4";
const VideoBackground = () => {
  return (
    <>
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 h-full w-full bg-black/35 z-1" />
    </>
  );
};

export default VideoBackground;
