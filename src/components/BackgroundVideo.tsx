import React, { useEffect, useState } from "react";

interface BackgroundVideoProps {
  videoSrc: string;
  posterSrc: string;
  className?: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoSrc,
  posterSrc,
  className = "",
}) => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
   
    const timeout = setTimeout(() => {
      setShowVideo(true);
    }, 2500); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <img
        src={posterSrc}
        alt="Background placeholder"
        className="object-cover w-full h-full absolute top-0 left-0 z-0"
        loading="eager"
        decoding="async"
      />

      {showVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full absolute top-0 left-0 z-0"
          preload="none"
          poster={posterSrc}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default BackgroundVideo;
