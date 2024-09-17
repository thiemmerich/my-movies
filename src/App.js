import './App.css';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './views/About';
import { Home } from './views/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
