import SectionIndicator from "./SectionIndicator";


const BasicInfo = ({prevStep, nextStep, step, userInfo, setUserInfo}) => {

    const {fullname, email, password} = userInfo;
  
    return (
        <div className="wrapper">
            <SectionIndicator step={step}/>
            <h1>Basic Info</h1>
            <form>
                <div>
                    <label>Full Name</label>
                    <input 
                        type="text"
                        required
                        name="fullname"
                        placeholder="Enter your full name"
                        value={fullname}
                        onChange={(e)=> setUserInfo({...userInfo, fullname: e.target.value})}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input 
                        type="text"
                        required
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e)=> setUserInfo({...userInfo, email: e.target.value})}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type="text"
                        required
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e)=> setUserInfo({...userInfo, password: e.target.value})}
                    />
                </div>
            </form>
            <div className="switch">
                <button className="back switch-btn" onClick={()=>prevStep()}>Back</button>
                <button className="next switch-btn" onClick={()=>nextStep()}>Next</button>
            </div>
        </div>   
    );
}
 
export default BasicInfo;