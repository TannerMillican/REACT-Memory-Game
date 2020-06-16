import React from "react";
import "./style.css";

class Header extends React.Component {
    state = {
        count: this.props.count
    };
    
    render() {
        return (
            <div className="score">
                <div className="gameName">
                    <h2>The React Memory Game!</h2>
                </div>
            <div className="guessOutcome">

            </div>
                <div className="playerScores">
                    <h4>Your Score:</h4>
                    <h4>Top Score:</h4>
                </div>
            </div>
        )
    }
}

export default Header