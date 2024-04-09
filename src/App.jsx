import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './main'
import Thanks from './thanks'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
