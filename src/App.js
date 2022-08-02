import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';
import { Container } from 'react-bootstrap'
import "./_app.scss"
import { useState, useEffect } from 'react';
import LoginScreen from './screens/loginScreen/LoginScreen';
import {
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";
import { useSelector } from 'react-redux';
import WatchScreen from './screens/watchScreen/WatchScreen';
const Layout = ({ children }) => {

  const [sidebar, setSidebar] = useState(false);

  const handleToggleSidebar = () => setSidebar(value => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  )
}


const App = () => {
  const navigate = useNavigate();
  const { accessToken, loading } = useSelector(state => state.auth)
  useEffect(() => {
    if (!loading && !accessToken) {
      navigate('/auth')
    }
  }, [accessToken, loading, navigate])

  return (
    <Routes>
      <Route path="/" element={
        <Layout>
          <HomeScreen />
        </Layout>}
        exact
      />
      <Route path="/auth" element={<LoginScreen />} />
      <Route path="/search" element={
        <Layout>
          {<h1>Search Results</h1>}
        </Layout>}
      />
      <Route path="/watch/:id" element={
        <Layout>
          <WatchScreen />
        </Layout>}
      />

      {/* Code ở dưới dùng để chuyển về trang chủ khi đường link sai cú pháp */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}

export default App;
