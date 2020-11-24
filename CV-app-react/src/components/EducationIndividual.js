import React from 'react';

export default class EducationIndividual extends React.Component{
    
    render() {
        const { education } = this.props
        const viewTemplate = (
            <div className="education-individual-container">
                <div>{ education.start } - { education.end }</div>
                <div>
                    <button onClick={ ()=> this.props.handleDeleteEdu(this.props.eduIndex)}
                        className="btn"
                    >X</button>
                    <p>{education.major}</p>
                    <p>{education.school}</p>
                    <p>{education.detail}</p>
                </div>
            </div>
        )

        return (
            viewTemplate
        )
    }
}