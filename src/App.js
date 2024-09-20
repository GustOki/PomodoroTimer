import './App.css';
import './scripts/timer.js'
import Header from './components/Header/header';
import Timer from './components/Timer/timerScreen';
import InfoMenu from './components/InfoMenu/infoMenu';
import Stop from './components/Stop/stop';
import Footer from './components/Footer/footer';


function App() {
  return (
    <>
      <Header/>
      <section className="screen">
        <Timer/>
        <InfoMenu/>
        <Stop/>
      </section>
      <Footer/>
    </>
  )
}

export default App;
