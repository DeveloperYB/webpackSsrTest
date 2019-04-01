import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts, NotFound } from '../pages';
import Menu from '../components/Menu';

class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         text: this.props.data.text
    //     };
    // }
    // componentDidMount() {
    //     this.setState({
    //         text: 'Client Loaded'
    //     });
    // }
    render() {
        return (
            <div>
                {/* <div>
                    <h1>{this.state.text}</h1>
                </div> */}
                <Menu />
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about/:name" component={About} />
                        <Route path="/about" component={About} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
