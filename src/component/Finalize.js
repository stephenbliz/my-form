import SectionIndicator from "./SectionIndicator";


const Finalize = ({prevStep, nextStep, step, userInfo, setUserInfo}) => {

    const{sendjoboffer, shareprofile} = userInfo;
    

    return (
        <div className="wrapper">
            <SectionIndicator step={step}/>
            <h1>Finalizing</h1>
            <div className='check-wrapper'>
                <input 
                    type='checkbox'
                    value={sendjoboffer}
                    checked={sendjoboffer}
                    onChange={()=>setUserInfo({...userInfo, sendjoboffer: !sendjoboffer})}
                />
                <label>Send me new job offer</label>
            </div>
            <div className='check-wrapper'>
                <input 
                    type='checkbox'
                    value={shareprofile}
                    checked={shareprofile}
                    onChange={()=>setUserInfo({...userInfo, shareprofile: !shareprofile})}
                />
                <label>Share my profile to companies</label>
            </div>
            <div className="switch">
                <button className="back switch-btn" onClick={()=>prevStep()}>Back</button>
                <button className="next switch-btn" onClick={()=>{
                    nextStep();
                    console.log(userInfo)
                }}>next</button>
            </div>
        </div>
        
    );
}
 
export default Finalize;