// This code is the entry point of the application and represents the main App component.
import './App.css' // Importing the associated CSS styles
import Aside from './Components/Aside/aside'    // Importing the Aside component 
import Chatbox from './Components/Chatbox/chatbox'  // Importing the Chatbox component
function App() {
  
  return (
    <>
    <div className='app'>
       {/* Render the Aside component */}
    <Aside />
     {/* Render the chatbox component */}
    <Chatbox />

    </div>
      
    </>
  )
}

export default App;
