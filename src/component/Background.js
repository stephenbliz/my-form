import SectionIndicator from "./SectionIndicator";


const Background = ({prevStep, nextStep, step, userInfo, setUserInfo}) => {

    const{jobtitle, education, location} = userInfo;

    
    return (
        <div className="wrapper">
            <SectionIndicator step={step}/>
            <h1>Background</h1>
            <form>
                <div>
                    <label>Job Title</label>
                    <input 
                        type="text"
                        required
                        name="jobtitle"
                        placeholder="Enter the job title"
                        value={jobtitle}
                        onChange={(e)=> setUserInfo({...userInfo, jobtitle: e.target.value})}
                    />
                </div>
                <div>
                    <label>Education</label>
                    <input 
                        type="text"
                        required
                        name="education"
                        placeholder="Enter your degree"
                        value={education}
                        onChange={(e)=> setUserInfo({...userInfo, education: e.target.value})}
                    />
                </div>
                <div>
                    <label>Location</label>
                    <input 
                        type="text"
                        required
                        name="location"
                        placeholder="Enter your location"
                        value={location}
                        onChange={(e)=> setUserInfo({...userInfo, location: e.target.value})}
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
 
export default Background;