class Stopwatch extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			running: false,
			minutes: 0,
			seconds: 0,
			miliseconds: 0
		}
	};

	format(minutes, seconds, miliseconds) {
		return `${pad0(minutes)}:${pad0(seconds)}:${pad0(Math.floor(miliseconds))}`;
	};

	handleStartClick () {
		if(!this.state.running) {
			const watch = setInterval(() => this.calculate(), 10);
			this.setState({
			 watch
			})
		}
	};

	handleStopClick () {
		const clear = clearInterval(this.state.watch);
		this.setState({
			clear
		})
	};

	handleResetClick () {
		this.setState({
			running: false,
			minutes: 0,
			seconds: 0,
			miliseconds: 0
		})
	};

	calculate() {
		let {minutes}= this.state;
		let {seconds}= this.state;
		let {miliseconds}= this.state;

		miliseconds += 1;
		if (miliseconds >= 100) {
			seconds += 1;
			miliseconds = 0;
		}
		if (seconds >= 60) {
			minutes += 1;
			seconds = 0;
		}

		this.setState({
			minutes,
			seconds,
			miliseconds
		})
	}

	render () {
		const {minutes}= this.state;
		const {seconds}= this.state;
		const {miliseconds}= this.state;
		return  (
			<div>{this.format(minutes, seconds, miliseconds)}
				<button className='button' onClick={() =>this.handleStartClick()}>Start</button>
				<button className='button' onClick={() =>this.handleStopClick()}>Stop</button>
				<button className='button' onClick={() =>this.handleResetClick()}>Reset</button>
			</div>
		);
	}
}

function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
	}

var element = React.createElement(Stopwatch);
ReactDOM.render(element, document.getElementById('app'));
