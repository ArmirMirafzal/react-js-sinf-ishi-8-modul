class Component {
	constructor(props) {
		this.props = props;
	}

	_render(props) {
		this.props = props;
		this.render();
	}
}

class App extends Component {
	state = { count: this.props.count };
	render() {
		console.log(this.props);
		console.log(this.state);

		return "app component";
	}
}

const props = { count: 20 };
const app = new App(props);
app._render(props);