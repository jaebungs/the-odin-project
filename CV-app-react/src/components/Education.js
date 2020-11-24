import React from 'react';
import EducationIndividual from './EducationIndividual';

export default class Education extends React.Component{
    constructor(props){
        super(props)
        this.state={
            education:[{
                school: 'Sample school name',
                major: 'Digging',
                start: '2000',
                end: '2222',
                detail: []
            }],
            addEdu: false,
            presentChecked: false
        }
        this.handleAddEdu = this.handleAddEdu.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handlePresentClick = this.handlePresentClick.bind(this);
        this.handleDeleteEdu = this.handleDeleteEdu.bind(this);
    }
    
    handleAddEdu(){
        this.setState((prevState)=>{
            return {
                addEdu: !prevState.addEdu
            }
        })
    }

    handlePresentClick(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            presentChecked: value
        })
    }

    handleDeleteEdu(eduToRemove){
        this.setState((prevState)=>{ 
            return {
                education: prevState.education.filter((_, i) => i !== eduToRemove)
            }})
    }

    handleCancel(){
        this.setState((prevState) => {
            return {
                addEdu: false
            }
        })
    }

    render(){
        const { education, addEdu } = this.state;

        const addTemplate = (
            <div className="education-add-container">
                <form onSubmit={this.handleAddSubmit}>
                    <label htmlFor="major">Major:</label>
                    <input type="text" name="major" id="major" required />
                    <label htmlFor="school">School:</label>
                    <input type="text" name="school" id="school" required />
                    <label htmlFor="start">Start:</label>
                    <input type="date" name="start" id="start" required />
                    <label htmlFor="end">End:</label>
                    <input type="date" name="end" id="end" disabled={this.state.presentChecked && true} />
                    <label htmlFor="untilPresent">Present</label>
                    <input type="checkbox" id="untilPresent" name="present" 
                        checked={this.state.presentChecked} 
                        onChange={this.handlePresentClick} 
                        />
                    <label htmlFor="detail">Detail:</label>
                    <textarea name="detail" id="detail" />
                    <button type="submit" className="btn">Add</button>
                    <button className="btn" onClick={this.handleCancel}>Cancel</button>
                </form>
            </div>
        )

        const viewTemplate = (
            <div className="education-container">
                <h3 className="section-container">Education</h3>
                <button className="btn edit-right" onClick={this.handleAddEdu}>+</button>
                {addEdu && addTemplate}
                { education.map((edu, index) => (
                    <EducationIndividual
                        key={index}
                        eduIndex={index}
                        education={edu}
                        handleDeleteEdu={this.handleDeleteEdu}
                    />
                ))}
            </div>
        )

        return (
            viewTemplate
        )
    }
}