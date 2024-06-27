import logo from './logo.svg';
import './App.css';
import PreLoader from './Components/PreLoader';
import Header from './Components/Header';
import SideArea from './Components/SideArea';
import Training from './Components/Training';
import Team from './Components/Team';
import Gallery from './Components/Gallery';
import Courses from './Components/Courses';
import About from './Components/About';
import Blog from './Components/Blog';
import Video from './Components/Video';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      {/* <PreLoader/> */}
      <Header />
      <SideArea />
      <Training />
      <Team />
      <Gallery />
      <Courses />
      <About/>
      <Blog/>
      <Video/>
      <Footer/>
    </div>
  );
}

export default App;
