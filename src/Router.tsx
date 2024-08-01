import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainpage';
import Layout from './components/Layout';
import AuthPage from './pages/authpage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import MyVideoPage from './pages/myvideopage';
import MySettingsPage from './pages/mysettingspage';
import KakaoRedirectHandler from './services/auth/kakao/redirectHandler';

const Router = () => {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID || ''}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/my-video" element={<MyVideoPage />} />
            <Route path="/my-settings" element={<MySettingsPage />} />
          </Route>
          <Route path="/auth/kakao/callback" element={<KakaoRedirectHandler />} />
        </Routes>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
};

export default Router;
