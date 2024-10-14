import { useEffect, useState, ChangeEvent } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  onTimeChange: (time: number) => void;
  videoRef: React.RefObject<HTMLVideoElement>;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, onTimeChange, videoRef }) => {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleLoadedData = () => {
        setDuration(videoElement.duration);
      };

      videoElement.addEventListener('loadeddata', handleLoadedData);

      videoElement.currentTime = 0;
      setCurrentTime(0);

      return () => {
        if (videoElement) {
          videoElement.removeEventListener('loadeddata', handleLoadedData);
        }
      };
    }
  }, [videoUrl, videoRef]);

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
      onTimeChange(time);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <video ref={videoRef} src={videoUrl} className="w-full max-w-xl mb-4 rounded-lg" />
      <input
        type="range"
        min="0"
        max={duration}
        step="0.1"
        value={currentTime}
        onChange={handleSliderChange}
        className="w-full max-w-xl mb-4"
      />
    </div>
  );
};

export default VideoPlayer;
