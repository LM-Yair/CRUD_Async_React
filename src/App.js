import './App.scss';

import Header from './components/Header/Header';
import CRUD_APP from './components/CRUD_app/CRUD_app';
import Footer from './components/Footer/Footer';
import DarkMode from './components/Dark__mode/Dark_mode';
import { CrudContextProvider } from './Context/CrudContext'

function App() {
  return (
    <>
    <Header />
    <CrudContextProvider>
      <CRUD_APP />
    </CrudContextProvider>
    <DarkMode />
    <Footer />
    </>
  );
}

export default App;
