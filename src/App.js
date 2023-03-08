import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Resume from './pages/Resume'
import Work from './pages/Work'
import Nav from './components/Nav'

export default function App () {
  return (
    <div className='App'>
      <Nav/>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/work/:symbol' element={<Work />} />
      </Routes>
    </div>
  )
}
