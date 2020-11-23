import React from 'react';

class Skill extends React.Component {
    render() {
        return (<div>
            <h4>{this.props.skillName}</h4>
            {
                [...Array(this.props.skillProficiency)].map((e, i) => 
                    <span className="proficiency-box" key={i}>p</span>)
            }
            <button onClick={() => this.props.handleDeleteSkill(this.props.skillName)} type="button">X</button>
        </div>)
    }
    
}

export default Skill;