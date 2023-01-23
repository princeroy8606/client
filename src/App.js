import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes'
import { fetchAllQuestions } from './actions/question'
import { fetchAllUsers } from './actions/users'
import ChatBot from './components/chatBot/ChatBot';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        {
          open ? (
            <>
              <div className="allroutes">
              <AllRoutes />
              </div>
            </>
          ) : (
            <AllRoutes />
          )
        }
        {
          open ? (
            <div className={`chat-bot-container ${open === true ? "active" : "inactive"}`}>
              <div className="chat-bot-cover">
                <ChatBot/>
              </div>
            </div>
          ) : (
            <></>
          )
        }
        <div className="bot-icon"
          onClick={handleClick}>
        </div>
      </Router>
    </div>
  );
}

export default App;
