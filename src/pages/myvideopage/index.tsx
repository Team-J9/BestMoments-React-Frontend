import VideoHeader from '../../components/video/Header';
import VideoList from '../../components/video/List';
import VideoUploader from '../../components/video/Uploader';

const MyVideoPage = () => {
  return (
    <section className="max-w-6xl m-auto">
      <VideoHeader />
      <VideoList />
      <VideoUploader />
    </section>
  );
};

export default MyVideoPage;
