import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import CollegeInformation from './components/CollegeInformation';
import A from  './components/A';
import Children from './components/Children';
import PractiseClassComponent from './components/PractiseClassComponent';
import Parent from './components/Parent';

import Message  from './components/Message';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Portal from './components/Portal';
import Versity from './components/Versity';
import University from './components/University';
import Team from './components/Team';
import Counter from './components/Counter';
import StopWatch from './components/StopWatch';
import Products from './components/Products';
import Userinfo from './components/Userinfo';
import Propclass from './components/Propclass';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import MyFunctionClick from './components/MyFunctionClick';
import  BindingEvent from './components/BindingEvent';
import Ebinding from './components/Ebinding';
import ParentComponent  from './components/ParentComponent';
import Abba from './components/Abba';

function App() {
  return (
    <div className="App">
      <Abba/>
     <ParentComponent/>
      <Ebinding/>
      <BindingEvent/>
      <MyFunctionClick/>
      <ClassClick/>
      <FunctionClick />
      <Propclass userName="ruhul amin" userEmail ="ruhulamin@gmail.com" />
      <Userinfo name="Ruhul Amin" email="ruhul@gmail.com" contact="012222" />
      <Products/>
      {/* <StopWatch/> */}
      {/* <Counter/> */}
      {/* <Team/> */}
      {/* <Dashboard/>
      <Message/>
      <Profile/>
      <University name="AIUB" location="Dhaka" Dept="CSE" />
      <Portal link="www.portalinfo.com" author="ruhul amin" >
        <div>
            <h3>Todays Topic ! </h3>
        </div>
      </Portal>
      <Versity id="16-31438-1" mail="ruhul@gmail.com">
      </Versity> */}
    </div>
  );
}

export default App;
