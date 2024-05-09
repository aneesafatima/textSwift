import './App.css';
import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, About } from './components';
function App() {
  return (
    <div className="App">
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
