import { Routes, Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Chat from './pages/Chat';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
    <div>
        <Routes>
            <Route path='/main' element={ <Main/> }/>
            <Route path='/chat' element={ <Chat/> }/>
        </Routes>   
    </div>
    </BrowserRouter>
  );
}

export default App;
