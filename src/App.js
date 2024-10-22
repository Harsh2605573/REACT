import logo from './logo.svg';
import './App.css';
import Userprovider from './Context/Userprovider';
import Comp1 from './Component/Comp1';

function App() {
  return (
  <>
  <Userprovider>
   <Comp1 /> 
  </Userprovider>
  </>
  );
}

export default App;
