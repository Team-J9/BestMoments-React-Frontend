import { useState } from 'react';
import useApi from '../../hooks/useApi';
import { getMyVideoList } from '../../lib/api/member/video/api';
import VideoViewerModal from './ViewerModal';
import VideoItem from './Item';

const VideoList = () => {
  const [pagination, setPagination] = useState({
    page: 0,
    size: 6,
    sort: '',
  });
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  const openModal = (videoId: string) => {
    setSelectedVideoId(videoId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedVideoId(null);
  };

  const { data } = useApi(getMyVideoList, [pagination.page, pagination.size, pagination.sort]);

  return (
    <div className="p-4">
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.content.map((video: any) => (
            <VideoItem key={video.id} video={video} onClick={() => openModal(video.id)} />
          ))}
        </div>
      )}
      {isModalOpen && selectedVideoId && <VideoViewerModal videoId={selectedVideoId} onClose={closeModal} />}
    </div>
  );
};

export default VideoList;
