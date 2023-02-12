import SectionIndicator from "./SectionIndicator";

const Data = ({userInfo, prevStep, step}) => {
    const {
        fullname, 
        email, 
        password, 
        education, 
        location, 
        sendjoboffer, 
        shareprofile} = userInfo;

    return (
        <div className="wrapper">
            <SectionIndicator step={step}/>
            <h1>Data Collection</h1>
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Education</th>
                        <th>Location</th>
                        <th>Share my profile</th>
                        <th>Send job offers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{fullname}</td>
                        <td>{email}</td>
                        <td>{password}</td>
                        <td>{education}</td>
                        <td>{location}</td>
                        <td>{shareprofile}</td>
                        <td>{sendjoboffer}</td>
                    </tr>
                </tbody>
            </table>
            <div className="switch">
                <button className="back switch-btn edit" onClick={()=>prevStep()}>Edit my Data</button>
                
            </div>
        </div>
    );
}
 
export default Data;