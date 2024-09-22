
import './App.css'

import Header from './header.jsx'
import Form from './Form.jsx'
// import Login from './Login.jsx'
// import Register from './Register.jsx'


function App() {


  return (
    <>
      {/* <div>
        <Login/>
        <Register/>
      </div> */}
      <div className='container'>
        <Header/>
        <h1 className='heading'>New Channel</h1>
        <Form/>
        
      </div>
      
    </>
    
    
  )
}

export default App
