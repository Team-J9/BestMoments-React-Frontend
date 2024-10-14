import { useState, useRef, useEffect } from 'react';
import ThumbnailManager from './ThumbnailManager';
import VideoPlayer from './Player';
import { uploadMyVideos } from '../../lib/api/member/video/api';

const VideoUploader = () => {
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [isVideoSelected, setIsVideoSelected] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [videoStatus, setVideoStatus] = useState<string>('PUBLIC');
  const [isUploading, setIsUploading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleLoadedData = () => {
        videoElement.currentTime = 1;
        videoElement.onseeked = () => {
          generateThumbnail();
          videoElement.currentTime = 0;
          videoElement.onseeked = null;
        };
      };

      videoElement.addEventListener('loadeddata', handleLoadedData);

      return () => {
        videoElement.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, [videoUrl]);

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
      setVideoFile(file);
      setIsVideoSelected(true);
      setThumbnailUrl(null);
    }
  };

  const generateThumbnail = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const canvas = document.createElement('canvas');
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          if (blob) {
            const thumbnailFile = new File([blob], 'thumbnail.png', { type: 'image/png' });
            setThumbnailFile(thumbnailFile);
            setThumbnailUrl(URL.createObjectURL(thumbnailFile));
          }
        }, 'image/png');
      }
    }
  };

  const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setThumbnailFile(file);
      setThumbnailUrl(url);
    }
  };

  const handleTimeChange = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const handleConfirm = async () => {
    if (isUploading) return;

    setIsUploading(true);
    if (videoFile) {
      try {
        const response = await uploadMyVideos(videoFile, thumbnailFile!, title, description, videoStatus);
        console.log(response);
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setIsUploading(false);
      }
    } else {
      alert('비디오 파일을 선택해야 합니다.');
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 ">
      <div className="mb-4">
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
          className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
        />
      </div>
      {isVideoSelected && (
        <div className="flex flex-col items-center mt-4 bg-white p-6 rounded-lg shadow-lg">
          <VideoPlayer videoUrl={videoUrl} onTimeChange={handleTimeChange} videoRef={videoRef} />
          <ThumbnailManager
            generateThumbnail={generateThumbnail}
            handleThumbnailUpload={handleThumbnailUpload}
            thumbnailUrl={thumbnailUrl}
          />
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-2 p-2 border rounded text-red-400"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-2 p-2 border rounded text-red-400"
          />
          <select
            value={videoStatus}
            onChange={(e) => setVideoStatus(e.target.value)}
            className="mt-2 p-2 border rounded text-red-400"
          >
            <option value="PUBLIC">Public</option>
            <option value="PRIVATE">Private</option>
          </select>
          <button className="bg-blue-500 text-white p-2 mt-4 rounded" onClick={handleConfirm}>
            업로드
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoUploader;
