import './styles/normalize.css'
import './styles/style.css'
import { useState } from 'react';
import AsideMenu from './components/AsideMenu'
import Generator from './components/Generate/Generator'
import Preview from './components/Preview/Preview'

const App = () => {

  //TODO: Make proper object to insert data from inputs
  const initData = {
    name: 'Lorem',
    lastName: 'ipsum',
    email: 'lorem@ipsum.com',
    phone: 4242725490
  }
  const [data, setData] = useState();

  return (
    <div className="App">
      <AsideMenu />
      <Generator />
      <Preview />
    </div>
  )
}

export default App;
