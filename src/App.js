import business from './images/business.jpg';
import {useState} from 'react';
import Background from './component/Background';
import BasicInfo from './component/BasicInfo';
import Welcome from './component/Welcome';
import Finalize from './component/Finalize';
import Data from './component/Data';



function App() {
  const [userInfo, setUserInfo] = useState({
    fullname: '',
    email: '',
    password: '',
    jobtitle: '',
    education: '',
    location: '',
    sendjoboffer: false,
    shareprofile: false
  })

  
  

  const [step, setStep] = useState(1);
  

  const prevStep = () => {
    setStep(step - 1);
  };
  const nextStep = () => {
    setStep( step + 1);
  };

const displayInfo = ()=> {
  switch(step){
    case 1:
      return(<Welcome
        nextStep={nextStep}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
      />)
    case 2:
      return(<BasicInfo 
        step={step}
        prevStep={prevStep} 
        nextStep={nextStep}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
      />)
    case 3:
      return(<Background
        step={step}
        prevStep={prevStep} 
        nextStep={nextStep}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
      />)
    case 4:
      return(<Finalize
        step={step}
        prevStep={prevStep} 
        nextStep={nextStep}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
      />)
    case 5:
      return(<Data
        step={step}
        prevStep={prevStep}
        userInfo={userInfo}
      />)
    default:
      return(<div>No page found</div>)
  }
}

  return (
    <div className="container">
      <div className="left-part parts">
        <img src={business} alt="A business paper" className="hero-image" />
      </div>
      <div className="right-part parts">
        {displayInfo()}
      </div>
    </div>
  );
}

export default App;
