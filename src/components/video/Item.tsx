import Image from '../common/Image';

const VideoItem = ({ video, onClick }: { video: any; onClick: () => void }) => {
  console.log(video);
  return (
    <div className="shadow-md rounded-lg overflow-hidden relative cursor-pointer" onClick={onClick}>
      <div className="bg-gray-200 h-48 w-full flex items-center justify-center">
        <Image src={video.thumbnailUrl} />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold truncate">{video.title}</h2>
        <p className="text-gray-400 truncate">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoItem;
