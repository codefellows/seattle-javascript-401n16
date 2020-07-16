import React from 'react';
import NameForm from './components/NameForm';
import PrettyPrintName from './components/PrettyPrintName';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Sarah Smalls',
            color: 'orange',
        };
    }

    updateState(key, val) {
        if (key === 'name') this.setState({ name: val });
        else if (key === 'color') this.setState({ color: val });
    }

    render() {
        return (
            <div className='App'>
                <NameForm
                    name={this.state.name}
                    color={this.state.color}
                    update={this.updateState.bind(this)}
                />
                <PrettyPrintName
                    name={this.state.name}
                    color={this.state.color}
                />
            </div>
        );
    }
}

export default App;
