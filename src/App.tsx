
import './App.css';
import Toolbar from './containers/Toolbar';
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home';
import Contacts from './containers/Contacts';

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
        {/*<Route path="*" element={<h1>Not Found!</h1>}/>*/}
      </Routes>
    </>
  );
}

export default App;
