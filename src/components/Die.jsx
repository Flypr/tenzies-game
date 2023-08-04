import "./Die.css";

function Die(props) {
    
    return (
        <div className="die">
            <span className="die__number">{props.value}</span>
        </div>
    );
}

export default Die;