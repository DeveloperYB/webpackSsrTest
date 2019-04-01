import React from 'react';

const About = props => {
    const { location, match } = props;
    return (
        <>
            <h2>About {match.params.name}</h2>
        </>
    );
};

export default About;
