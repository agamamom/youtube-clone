import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';
import { Container } from 'react-bootstrap'
import "./_app.scss"
import { useState } from 'react';
import LoginScreen from './screens/loginScreen/LoginScreen';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

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
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter >
  );
}

export default App;
