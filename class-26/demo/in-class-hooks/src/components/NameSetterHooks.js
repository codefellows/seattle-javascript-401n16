import React, { useState, useEffect } from 'react';

function NameSetter(props) {
    const [fName, setFName] = useState('Sarah');
    const [lName, setLName] = useState('Smalls');
    const [age, setAge] = useState(30);

    // first param: a function to execute on Mount (and when second param has a change)
    // return value should be another function to run on unmount
    // second param: an array of variables to check for changes (if empty, first param only runs on mount)

    function updateOnDeath() {
        console.log('unmount');
        document.title = 'dying';
    }

    function updateTitleWithName() {
        console.log('mount/update');
        document.title = fName + ' ' + lName;
        return updateOnDeath;
    }

    // run only on mount
    // useEffect(updateTitleWithName, []);

    // run on mount and ANY component update, and "cleans up" every time by running the unmount
    // useEffect(updateTitleWithName, null);

    // run on mount and when ONLY the variable i care about change
    // useEffect(updateTitleWithName, [fName, lName]);

    // typical implementation
    useEffect(() => {
        console.log('mount/update');
        document.title = fName + ' ' + lName;
        return () => {
            console.log('unmount');
            document.title = 'dying';
        };
    }, [fName, lName]);

    function handleResize(e) {
        console.log('resize');
    }

    useEffect(() => {
        console.log('ran once');
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <label>First Name: </label>
            <input
                type='text'
                value={fName}
                onChange={(e) => {
                    setFName(e.target.value);
                }}
            />
            <label>Last Name: </label>
            <input
                type='text'
                value={lName}
                onChange={(e) => {
                    setLName(e.target.value);
                }}
            />
            <input
                type='number'
                value={age}
                onChange={(e) => {
                    setAge(parseInt(e.target.value));
                }}
            />
            <h1>
                Welcome {fName} {lName}
            </h1>
        </>
    );
}

/*
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
*/
export default NameSetter;
