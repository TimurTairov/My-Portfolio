import AppRouter from './components/AppRouter';
import MyFooter from './components/MyFooter';
import NavBar from './components/NavBar';
import './styles/App.css'


function App() {

  return (

    <div className='app'>
      <NavBar />
      <AppRouter className='app-router' />
      <MyFooter />
    </div>

  );
}

export default App;
