import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Header/Footer/Footer';
import HomeCover from './components/HomeCover/Homecover';



function App() {
  return (
    <div>
      <Header/>
      <HomeCover/>
      <Footer/>
    </div>
  );
}

export default App;
