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

  const initExperienceData = {
    companyName: '',
    city: '',
    role: '',
    dateFrom: '',
    dateTo: ''
  }

  const initSectionData = {
    personal: true,
    education: false,
    experience: false,
  }

  const submitExperience = () => {
    setExperience(experience.concat(experienceObj));
    setExperienceObj(initExperienceData);
  }

  // State hooks
  // TODO: Change setExperience/setEducationObj names
  const [personalData, setPersonalData] = useState(initPersonalData);
  const [experience, setExperience] = useState([])
  const [experienceObj, setExperienceObj] = useState(initExperienceData)
  const [education, setEducation] = useState([])
  const [educationObj, setEducationObj] = useState({})
  const [activeSection, setActiveSection] = useState(initSectionData);

  // Object to manage data in generator component
  const states = {
    personalData,
    setPersonalData,
    experience,
    setExperience,
    experienceObj,
    setExperienceObj,
    education,
    setEducation,
    educationObj,
    setEducationObj,
    activeSection,
    setActiveSection,
    submitExperience,
  }

  console.log(experience);

  return (
    <div className="App">
      <AsideMenu activeSection={activeSection} setActiveSection={setActiveSection}/>
      <Generator states={states}/>
      <Preview states={states}/>
    </div>
  )
}

export default App;
