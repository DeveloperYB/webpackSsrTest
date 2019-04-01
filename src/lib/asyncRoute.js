import React, { Component } from 'react';

const asyncComponent = getComponent => {
    class asyncComponent extends Component {
        state = {
            AsyncComp: null
        };
        constructor(props) {
            super(props);
            getComponent().then(({ default: AsyncComp }) => {
                this.setState({
                    AsyncComp
                });
            });
        }
        render() {
            const { AsyncComp } = this.state;
            if (!AsyncComp) {
                return null;
            }
            return <AsyncComp {...this.props} />;
        }
    }

    return asyncComponent;
};

export default asyncComponent;
