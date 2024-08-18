import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './Components/Common/Landingpage'

function App() {
  return (
    <>
     <Routes>
      <Route exact path='/' element={<Landingpage/>}/>
     </Routes>
    </>
  )
}
export default App
