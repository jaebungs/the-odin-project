import React from 'react';
import Personal from './Personal';
import Skills from './Skills';
import Summary from './Summary';
import Experience from './Experience';
import Education from './Education';

export default class CVApplication extends React.Component {

    render() {
        return (
            <div>
                <Personal />
                <Skills />
                <Summary />
                <Experience />
                <Education />
            </div>
        )
    }
}
