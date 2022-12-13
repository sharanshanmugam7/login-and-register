import { Routes , Route ,BrowserRouter } from 'react-router-dom';
import Login from "./login/Login";
import Register from "./register/Register";
function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

