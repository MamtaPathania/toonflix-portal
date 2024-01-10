import HomePage from "./components/HomePage";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import VideoPage from "./components/VideoPage";
import SimilarVideos from "./components/SimilarVideos";


function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/videos/:id" element={<VideoPage/>}/>
          <Route path="/index" element={<SimilarVideos/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
