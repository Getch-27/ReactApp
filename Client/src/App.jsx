// This code is the entry point of the application and represents the main App component.
import './App.css' // Importing the associated CSS styles
// import Aside from './Components/Aside/aside'    // Importing the Aside component 
// import Chatbox from './Components/Chatbox/chatbox'  // Importing the Chatbox component
import { Routes , Route } from 'react-router'
import Home from './Containers/Home/Home';
import LogInPage from './Containers/Autentication/LogInPage';
function App() {
  
  return (
    <div className='app'>
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/LogInPage' element={<LogInPage/>} />
    </Routes>


    {/* <div className='app'>
      
    <Aside />
     
    <Chatbox />

    </div> */}
      
    </div>
  )
}

export default App;
