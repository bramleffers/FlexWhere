import React from 'react';
import request from 'superagent'

class StepThree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    saveConfiguration(){
        request.post('/user')
        .set('Content-Type', 'application/json')
        .send('{"ip":"1.1.1.1","orgID":"FlexWhere"}');
    }

    render() { 
        return (   'Overzicht' );
    }
}
 
export default StepThree;