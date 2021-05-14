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
    email: ''
  }


  // State hooks
  const [personalData, setPersonalData] = useState(initPersonalData);
  const [experience, setExperience] = useState([])
  const [education, setEducation] = useState([])
  const [additional, setAdditional] = useState({})
  console.log(personalData);
  return (
    <div className="App">
      <AsideMenu />
      <Generator setData={setPersonalData} data={personalData}/>
      <Preview personalData={personalData} experience={experience} education={education} additional={additional}/>
    </div>
  )
}

export default App;
