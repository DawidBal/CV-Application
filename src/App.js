import './styles/normalize.css';
import './styles/style.css';
import { useState, useRef } from 'react';
import AsideMenu from './components/AsideMenu';
import Generator from './components/Generate/Generator';
import Preview from './components/Preview/Preview';
import uniqid from "uniqid";

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
    github: '',
    skills: '',
    summary: '',
  }

  const initExperienceData = {
    id: '',
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

  const initEducationData = {
    id: '',
    school: '',
    city: '',
    dateFrom: '',
    dateTo: '',
    degree: '',
  }

  const submitExperience = () => {
    experience.id = uniqid();
    setExperienceList(experienceList.concat(experience));
    setExperience(initExperienceData);
  }
  
  const submitEducation = () => {
    education.id = uniqid();
    setEducationList(educationList.concat(education));
    setEducation(initEducationData);
  }
  // State hooks
  const [personalData, setPersonalData] = useState(initPersonalData);
  const [experienceList, setExperienceList] = useState([])
  const [experience, setExperience] = useState(initExperienceData)
  const [educationList, setEducationList] = useState([])
  const [education, setEducation] = useState(initEducationData)
  const [activeSection, setActiveSection] = useState(initSectionData);
  const [photoFile, setPhotoFile] = useState(null);

  // Ref hooks
  const printRef = useRef();

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
    photoFile,
    setPhotoFile,
    submitExperience,
    submitEducation,
    printRef,
  }

  return (
    <div className="App">
      <AsideMenu componentRef={printRef} activeSection={activeSection} setActiveSection={setActiveSection}/>
      <Generator states={states}/>
      <Preview ref={printRef} states={states}/>
    </div>
  )
}

export default App;
