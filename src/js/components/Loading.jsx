import React, { Component } from 'react';

class Loading extends Component {
    render() {
        return (
            <div className="fallback fallback_loading">
                <div className="loading-circle"></div>
                <h3>App is loading...</h3>
            </div>
        );
    }
}

export default Loading;
