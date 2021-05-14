import './styles/normalize.css'
import './styles/style.css'
import { useState } from 'react';
import AsideMenu from './components/AsideMenu'
import Generator from './components/Generate/Generator'
import Preview from './components/Preview/Preview'

const App = () => {

  const initPersonalData = {
    firstName: '',
    lastName: '',
    role: '',
    address: '',
    phone: '',
    email: '',
    fb: '',
    twitter: '',
    linkedin: '',
    github: ''
  }


  // State hooks
  const [personalData, setPersonalData] = useState(initPersonalData);
  const [experience, setExperience] = useState([])
  const [education, setEducation] = useState([])
  const [activeSection, setActiveSection] = useState({
    personal: true,
    education: false,
    experience: false,
  });

  // Object to manage data in generator component
  const states = {
    personalData,
    setPersonalData,
    experience,
    setExperience,
    education,
    setEducation,
    activeSection,
    setActiveSection,
  }

  return (
    <div className="App">
      <AsideMenu activeSection={activeSection} setActiveSection={setActiveSection}/>
      <Generator states={states}/>
      <Preview states={states}/>
    </div>
  )
}

export default App;
