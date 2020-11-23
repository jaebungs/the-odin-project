import React from 'react';

export default class Summary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            summary: ``,
            isEditing: false
        };
        this.handleSummaryEdit = this.handleSummaryEdit.bind(this);

    }

    handleSummaryEdit(){

    }

    render(){
        
        const { summary, isEditing } = this.state
        return(
            <div>
            Summary
            </div>
        )
    }
    
}