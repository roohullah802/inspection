import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import SignIn from './auth/Sign-in'
import NotFound from './pages/notFound/NotFound'
import DashboardLayout from './layout/DashboardLayout'
import LabourDashboard from './pages/dashboard/Dashboard'
import Challan from './pages/challans/challan'
import Task from './pages/newTask/Task'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={"/admin"} />} />
        <Route path='/admin' element={<DashboardLayout />}>
          <Route index element={<LabourDashboard />} />
          <Route index path='challans' element={<Challan />} />
          <Route index path='new-task' element={<Task />} />
        </Route>

        <Route path='/sign-in' element={<SignIn />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
