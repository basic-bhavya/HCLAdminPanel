'use strict';
import App from 'D:\Stuff\Coding\React\googlemaps\googlemaps\src\App';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(

            // <App />

      'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

const domContainer = document.querySelector('#map');
ReactDOM.render(e(LikeButton), domContainer);