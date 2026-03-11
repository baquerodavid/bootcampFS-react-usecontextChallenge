import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MyJob from '../pages/MyJob';
import Profile from '../pages/Profile';
import Root from '../components/Root';

function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />}></Route>
          <Route path="/myjob" element={<MyJob />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default RoutesApp;


// 👇 CODIGO DE LA LIVE REVIEW EMPIEZA DESDE AQUÍ 👇
/* 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../themes/ThemeContext';
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import MyJob from '../pages/MyJob'
import Header from '../components/Header';

const RoutesApp = () => {
  const { theme } = useContext(ThemeContext) 
  return (
    <Router>
      <section className={`App ${theme}`}>
        <div className='container'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/myJob" element={<MyJob />} />
          </Routes>
        </div>
      </section>
    </Router>
  )
}

export default RoutesApp
 */