import React from 'react';
import ConfigurationForm from '../Configuration/ConfigurationForm';


class StepTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ipaddress: '1.1.1.1'
        }
    }
    render() {
        return (
            <ConfigurationForm {...this.props.ipaddress} />
        );
    }
}

export default StepTwo;