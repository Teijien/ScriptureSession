import './App.css';
import NavBar from './Components/NavItem.js'
import View from './Components/View.js'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<View />} />
      </Routes>
    </div>
  );
}

export default App;