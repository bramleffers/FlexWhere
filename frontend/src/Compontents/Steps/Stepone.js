import React from 'react';
import CircularIndeterminate from '../Spinner/Spinner';
import ConfigurationList from '../Configuration/ConfigurationList';
import Button from '@material-ui/core/Button';


class StepOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 5 }
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds - 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    
    render() {
        
        return (<div className="justify-content-center">
            Zoeken naar Philips Hue apparaten
            <Button variant="contained" color="secondary">Handmatig IP adres opvoeren</Button>
             <div>
                <CircularIndeterminate {...this.props.seconds} />
            </div>
            <ConfigurationList />
        </div>);
    }
}

export default StepOne;