import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MyJob from '../pages/MyJob';
import Profile from '../pages/Profile';
import Root from '../components/Root';

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />}></Route>
        <Route path="/myjob" element={<MyJob />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Route>
    </Routes>
  );
}

export default RoutesApp;