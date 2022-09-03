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
        <Route path="section" />
        <Route path='*' element={
          <main style={{ padding: "1rem" }}>
            <p>An error has occurred. Please press the back button on your browser.</p>
          </main>
        } />
      </Routes>
    </div>
  );
}

export default App;