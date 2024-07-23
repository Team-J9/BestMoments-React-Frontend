import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainpage';
import Layout from './components/Layout';
import AuthPage from './pages/authpage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import MyVideoPage from './pages/myvideopage';
import MySettingsPage from './pages/mysettingspage';

const Router = () => {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId="341728937347-csf336luiofe1k01m30pl4u6h2chosej.apps.googleusercontent.com">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/my-video" element={<MyVideoPage />} />
            <Route path="/my-settings" element={<MySettingsPage />} />
          </Route>
        </Routes>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
};

export default Router;
