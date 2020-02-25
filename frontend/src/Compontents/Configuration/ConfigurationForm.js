import React from 'react';
import axios from 'axios';

class ConfigurationForm extends React.Component {

    submitConfiguration(event) {
        event.preventDefault();

        axios.post('http://localhost:3000/configuration', {
            config: this.refs.ipAddress.value,
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="row">
                <h5 className="center">Handmatig IP invoeren</h5>
                <form className="col s12" onSubmit={this.submitConfiguration.bind(this)}>
                    <div className="row">
                        <div className="input-field col s7">
                            <label htmlFor="ipAddress">IP-Address:</label>
                            <input id="ipAddress" ref="ipAddress" type="text" maxLength="16" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ConfigurationForm;