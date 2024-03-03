import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomeCover from './components/HomeCover/Homecover';
import Slider from './components/Slider/Slider';



function App() {
  return (
    <div>
      <Header/>
      <HomeCover/>
      <Slider/>
      <Footer/>
    </div>
  );
}

export default App;
