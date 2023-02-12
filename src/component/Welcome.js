const Welcome = ({nextStep}) => {
    return (
        <div className="wrapper">
            <h1>Welcome to BlizCut</h1>
            <p>Signup to continue</p>
            <div className="btn-wrapper">
                <button className="fb button">Signup with Facebook</button>
                <button className="tw button">Signup with Twitter</button>
                <button className="email button" onClick={()=>nextStep()}>Signup with Email</button>
            </div>
        </div>
    );
}
 
export default Welcome;