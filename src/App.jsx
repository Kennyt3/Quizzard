import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Layout from './pages/layout'
import Home from './pages/home'
import Quiz from './pages/quiz'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='quiz' element={<Quiz />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
