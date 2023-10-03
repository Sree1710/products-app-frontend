
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ViewProducts from './Components/ViewProducts';
import AddProducts from './Components/AddProducts';
import SearchProducts from './Components/SearchProducts';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<AddProducts/>}/>
        <Route path='/searchp' eaxct element={<SearchProducts/>}/>
        <Route path='/viewp' exact element={<ViewProducts/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
