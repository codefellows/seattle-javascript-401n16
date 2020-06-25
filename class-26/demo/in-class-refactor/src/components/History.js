import React from 'react';
import If from './If';
import { Redirect } from 'react-router-dom';

// props.history

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
    }
    // list of history events
    // each item has an object with {url, method, body, headers}

    onRerun(request) {
        this.props.onRerun(request);
        this.setState({ redirect: true });

        // do something
    }

    render() {
        let historyElements = [];
        for (let i = 0; i < this.props.history.length; i++) {
            if (this.props.size === 'light') {
                historyElements.push(
                    <div key={i}>
                        <span className='url'>{this.props.history[i].url}</span>
                        <span className='method'>
                            {this.props.history[i].method}
                        </span>
                        <button
                            onClick={(e) => {
                                this.onRerun(this.props.history[i]);
                            }}
                        >
                            Rerun
                        </button>
                    </div>,
                );
            } else {
                historyElements.push(
                    <div key={i}>
                        <span className='url'>{this.props.history[i].url}</span>
                        <span className='method'>
                            {this.props.history[i].method}
                        </span>
                        <button
                            onClick={(e) => {
                                this.onRerun(this.props.history[i]);
                            }}
                        >
                            Rerun
                        </button>
                        <div>
                            <span>{this.props.history[i].body}</span>
                            <span>{this.props.history[i].headers}</span>
                        </div>
                    </div>,
                );
            }
        }

        return (
            <>
                <If condition={this.state.redirect}>
                    <Redirect push to='/' />
                </If>
                <If condition={!this.state.redirect}>
                    <div
                        className={this.props.className}
                        style={this.props.style}
                    >
                        {historyElements}
                    </div>
                </If>
            </>
        );
    }
}

export default History;
