import "./Die.css";

function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#ffffff"
    }
    return (
        <div className="die" style={styles} onClick={props.holdDice}>
            <span className="die__number">{props.value}</span>
        </div>
    );
}

export default Die;