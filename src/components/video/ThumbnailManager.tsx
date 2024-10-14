import Image from '../common/Image';

interface ThumbnailManagerProps {
  generateThumbnail: () => void;
  handleThumbnailUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  thumbnailUrl: string | null;
}

const ThumbnailManager = ({ generateThumbnail, handleThumbnailUpload, thumbnailUrl }: ThumbnailManagerProps) => {
  return (
    <div className="mb-4 flex flex-col items-center">
      <input
        type="file"
        accept="image/*"
        onChange={handleThumbnailUpload}
        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
      />
      <button
        onClick={generateThumbnail}
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        썸네일 저장
      </button>
      {thumbnailUrl && (
        <div className="w-full max-w-xl mb-4">
          <Image src={thumbnailUrl} alt="Thumbnail" width={600} height={250} className="rounded-lg" />
        </div>
      )}
    </div>
  );
};

export default ThumbnailManager;
