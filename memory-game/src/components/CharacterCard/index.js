import React from "react";
import "./style.css";

class CharacterCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clickNumber: props.clicks
        }
        this.handleIncrement = this.handleIncrement.bind(this)
        
    };

    componentDidMount() {
        console.log(this.state)
    }

    handleIncrement() {

        this.setState({ clickNumber: this.state.clickNumber + 1 })

        console.log(this.state)

    };

    render() {
        return (
            <div className="card" onClick={this.handleIncrement}>
                <div className="img-container">
                    <img
                        alt={this.props.name}
                        src={this.props.image}
                    />
                </div>
                <div className="content">
                    <ul>
                        <li>
                            <strong>Name:</strong> {this.props.name}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default CharacterCard;

