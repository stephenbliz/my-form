const SectionIndicator = ({step}) => {
    const section = [1, 2, 3, 4];
    const bckColor ={
        backgroundColor:'rgb(91, 6, 171)'
    }

    return (
        <div className="sec-ind">
            { step ===2 ? <h2 style={bckColor}>{section[0]}</h2> : <h2>{section[0]}</h2> }
            { step ===3 ? <h2 style={bckColor}>{section[1]}</h2> : <h2>{section[1]}</h2> }
            { step ===4 ? <h2 style={bckColor}>{section[2]}</h2> : <h2>{section[2]}</h2> }
            { step ===5 ? <h2 style={bckColor}>{section[3]}</h2> : <h2>{section[3]}</h2> }
        </div>
    );
}
 
export default SectionIndicator;