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
    summary: '',
    fb: '',
    twitter: '',
    linkedin: '',
    github: ''
  }

  const initExperienceData = {
    companyName: '',
    city: '',
    role: '',
    dateFrom: '',
    dateTo: '',
    responsibilities: ''
  }

  const initSectionData = {
    personal: true,
    education: false,
    experience: false,
  }

  const submitExperience = () => {
    setExperienceList(experienceList.concat(experience));
    setExperience(initExperienceData);
  }

  // State hooks
  const [personalData, setPersonalData] = useState(initPersonalData);
  const [experienceList, setExperienceList] = useState([])
  const [experience, setExperience] = useState(initExperienceData)
  const [educationList, setEducationList] = useState([])
  const [education, setEducation] = useState({})
  const [activeSection, setActiveSection] = useState(initSectionData);

  // Object to manage data in generator component
  const states = {
    personalData,
    setPersonalData,
    experience,
    setExperience,
    experienceList,
    setExperienceList,
    education,
    setEducation,
    educationList,
    setEducationList,
    activeSection,
    setActiveSection,
    submitExperience,
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
