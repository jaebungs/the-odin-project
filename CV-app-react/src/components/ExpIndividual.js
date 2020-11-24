import React from 'react';

export default class ExpIndividual extends React.Component{

    render(){
        return (
            <div className="individual-exp-container">
                <div className="exp-years">{ this.props.expStart } - { this.props.expEnd }</div>
                <div className="exp-text">
                    <button onClick={ ()=> this.props.handleDeleteExp(this.props.expIndex) }>X</button>
                    <p>{ this.props.expPosition }</p>
                    <p>{ this.props.expCompany }</p>
                    <p>{ this.props.expResp }</p>
                </div>
            </div>
        )
    }
}