import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import EducationPage from './pages/EducationPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />
      case 'about': return <AboutPage />
      case 'projects': return <ProjectsPage />
      case 'education': return <EducationPage />
      case 'services': return <ServicesPage />
      case 'contact': return <ContactPage setCurrentPage={setCurrentPage} />
      case 'signin': return <SignIn setCurrentPage={setCurrentPage} />
      case 'signup': return <SignUp setCurrentPage={setCurrentPage} />
      default: return <HomePage setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="App">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  )
}

export default App
