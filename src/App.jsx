import { BrowserRouter as Router } from 'react-router-dom';
import RoutesApp from './routes/RoutesApp';
import { ThemeProvider } from './themes/ThemeContext';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
        <Router>
          <RoutesApp />
        </Router>
    </ThemeProvider>
  );
};

export default App;
