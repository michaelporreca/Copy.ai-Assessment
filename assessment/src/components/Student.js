import React from 'react'

const Student = (props) => {


    return (
        <div className="students">
            <div className="studentimg">
                <img src={props.pic} alt="pic"></img>
            </div>
            <h2>{props.firstName} {props.lastName}</h2>
            <div className="studentinfo">
                <p>Email: {props.email}</p>
                <p>Company: {props.company}</p>
                <p>Skill: {props.skill}</p>
                <p>Average: {props.grades.reduce((sum, curr) => sum + Number(curr), 0) / props.grades.length}%</p>
            </div>
            <hr></hr>
        </div>
    )
}

export default Student;