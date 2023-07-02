import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import Navbar from "./components/Navbar";


function App() {
  return (

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route Component={Home} path='/' exact/>
        <Route  path='/about'  element={<About/>} />
        <Route Component={SinglePost} path='/post/:slug'/>
        <Route Component={Post} path='/post'/>
        <Route Component={Project} path='/project'/>
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
