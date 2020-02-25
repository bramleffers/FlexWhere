import React from 'react';
import './App.css';
import CustomizedSteppers from './Wizard/Wizard';
import FlexWhereAppBar from './Appbar/Appbar';
import Button from '@material-ui/core/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  // this.updateConfiguration = this.updateCurrentConfiguration.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3000/configurations")
      .then(res => res.json())
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            ip: res.ipAddressPi,
            orgId: res.orgId,
            pods: res.pods
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  handleupdateConfiguration = () => {
    fetch('http://localhost:3000/configurations', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ipAddressPi: '0.0.0.0',
        orgId: 'TEST',
        pods: [
          {
            podId: '0000',
            podType: "Philips TEST",
            podSensitivity: '5',
            podIpAddress: "1.1.1.1",
            podMacAddress: "00:00:00:00:00"
          },
        ]
      })
    }).then(res => this.componentDidMount());
  };

  updateConfiguration() {
    this.setState({
    })
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container-fluid">
          <FlexWhereAppBar />
          <div className="row">
            <ul>
              {this.state.pods.map(item => (
                <li key={item.podId}>
                  {item.podType} {item.podIpAddress}
                </li>
              ))}
            </ul>
            <Button onClick={this.handleupdateConfiguration}>
              Update Mock
            </Button>
            <div>{this.state.ip || 'waiting for response...'}</div>
            <div>{this.state.orgId || 'waiting for response...'}</div>
            <CustomizedSteppers />
          </div>
        </div>
      );
    }
  }
}

export default App;
