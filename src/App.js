import './App.css';
import Header from './components/header.jsx'
import Home from './routes/home/home';
import { Routes, Route, Link } from "react-router-dom";
import Detail from './routes/home/detail';
function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<Home />} />
          <Route path="detail" element={<Detail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
