import React from 'react';

export default class Experience extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            experience: [{
                company: 'Estee Lauder',
                position: 'Maintenance Technician',
                start: '2017-12',
                end: '2020-12',
                responsibilities: 'exampl1'
            }],
            addNewExp: false
        };
        this.handleAddExp = this.handleAddExp.bind(this);
    }

    handleAddExp(){
        this.setState({
            addNewExp: true
        })
    }


    render(){
        const { experience, addNewExp } = this.state;

        const editTemplate = (
            <div>
            edit
            </div>
        )

        const template = (
            <div className="experience-container">
                <h3>Experience</h3>
                <button className="add-btn" onClick={this.handleAddExp}>+</button>
                {addNewExp && editTemplate}
                <div>hi</div>
            </div>
        )

        return(
            template
        )
    }
}