import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router'

function App() {

  return (
    <div className='app'>
       <Header />
       <Outlet data-testid="outlet"/>
    </div>
  )
}

export default App
