import './App.css';
import Portfolio_Main from './Pages/Portfolio_Main';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    <div className="App">
      <Portfolio_Main />
      <ToastContainer theme='colored'/>
    </div>
  );
}

export default App;
