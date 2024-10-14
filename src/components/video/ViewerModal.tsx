import React, { useEffect, useRef } from 'react';
import useApi from '../../hooks/useApi';
import { getMyVideoDetails } from '../../lib/api/member/video/api';

interface VideoViewerModalProps {
  videoId: string;
  onClose: () => void;
}

const VideoViewerModal: React.FC<VideoViewerModalProps> = ({ videoId, onClose }) => {
  const { data, loading } = useApi(getMyVideoDetails, [videoId]);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div ref={modalRef} className="rounded-lg shadow-lg overflow-hidden w-full max-w-[1224.89px] relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl">
          &times;
        </button>
        <div className="p-4">
          {data ? (
            <>
              <video controls className="w-full h-auto">
                <source src={data.fileUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="mt-4">
                <h2 className="text-white text-2xl font-semibold">{data.title}</h2>
                <p className="text-white mt-2">{data.description}</p>
              </div>
            </>
          ) : (
            <div>No video data available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoViewerModal;
