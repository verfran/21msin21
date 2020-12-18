import React, { Component } from 'react';

class Update extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: true,
            isLoaded: false,
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        this.setState({ isLoaded: false });

        fetch('http://127.0.0.1:8000/api/msdata/verfran@hotmail.com/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    scripture: json.scripture,
                })
            });
    }

    render() {
        if (!this.state.isLoaded) {
            return (
                <div>
                    Loading ...
                </div>
            )
        }

        return (
            <div>
                {this.state.scripture.application.notes}
            </div>
        );
    }
}


export default Update;