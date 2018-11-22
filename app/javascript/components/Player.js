import React from "react"
import PropTypes from "prop-types"
class Player extends React.Component {
  	constructor(props) {
	    super(props);
	    this.state = { seconds: 0 };
	  }

	  tick() {
	    this.setState(state => ({
	      seconds: state.seconds + 1
	    }));
	  }

	  componentDidMount() {
	    this.interval = setInterval(() => this.tick(), 1000);
	  }

	  componentWillUnmount() {
	    clearInterval(this.interval);
	  }

	  render() {
	    return (
	      <div>
	        Seconds: {this.state.seconds}
			<audio controls className="player" preload="false">
			  <source src="http://www.nihilus.net/soundtracks/Static%20Memories.mp3" />
			</audio>
	      </div>
	    );
	  }
}

Player.propTypes = {
  seconds: PropTypes.string
};
export default Player
