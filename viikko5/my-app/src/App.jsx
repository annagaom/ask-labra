import './App.css';
import{Route,BrowerRouter as Router, Routes} from 'react-router-dom';
import { Profile } from './views/Profile';
import Home from './views/Home';
import Upload from './views/Upload';
import Layout from './views/Layout';


const App = () => {
  return (
    <Router>
  
        <Routes>
        <Route path="/" element={<Layout />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
          
          
          </Routes>
      </Router>
  );
};

export default App;

