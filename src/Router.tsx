import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainpage';
import Layout from './components/Layout';
import AuthPage from './pages/authpage';
import { GoogleOAuthProvider } from '@react-oauth/google';

const Router = () => {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId="341728937347-csf336luiofe1k01m30pl4u6h2chosej.apps.googleusercontent.com">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/login" element={<AuthPage />} />
          </Route>
        </Routes>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
};

export default Router;
