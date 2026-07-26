import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './auth/Sign-in'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/sign-in' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
