import React from 'react';

class NameSetter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: 'Sarah',
            lName: 'Smalls',
            age: 30,
        };
    }

    componentDidMount() {
        console.log('mount');
        document.title = this.state.fName + ' ' + this.state.lName;
    }

    componentDidUpdate() {
        console.log('update');
        document.title = this.state.fName + ' ' + this.state.lName;
    }

    componentWillUnmount() {
        console.log('dying');
        document.title = 'dying';
    }

    updateFirstName(e) {
        this.setState({ fName: e.target.value });
    }

    updateLastName(e) {
        this.setState({ lName: e.target.value });
    }

    updateAge(e) {
        this.setState({ age: parseInt(e.target.value) });
    }

    render() {
        return (
            <>
                <label>First Name: </label>
                <input
                    type='text'
                    value={this.state.fName}
                    onChange={this.updateFirstName.bind(this)}
                />
                <label>Last Name: </label>
                <input
                    type='text'
                    value={this.state.lName}
                    onChange={this.updateLastName.bind(this)}
                />
                <input
                    type='number'
                    value={this.state.age}
                    onChange={this.updateAge.bind(this)}
                />
                <h1>
                    Welcome {this.state.fName} {this.state.lName}
                </h1>
            </>
        );
    }
}

export default NameSetter;
