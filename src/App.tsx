
import Toolbar from './containers/Toolbar';
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home';
import Contacts from './containers/Contacts';
import Note from './containers/Note';
import './App.css';

function App() {

  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <Routes>
        <Route path="/" element={(
          <Home />
        )}/>
        <Route path="/contacts" element={(
          <Contacts />
        )}/>
        <Route path="/note" element={(
          <Note />
        )}/>
        {/*<Route path="*" element={<h1>Not Found!</h1>}/>*/}
      </Routes>
    </>
  );
}

export default App;
