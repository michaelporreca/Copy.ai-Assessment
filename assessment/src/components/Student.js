import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Tags from './Tags';

const Student = (props) => {

    const [isHidden, setIsHidden] = useState(true)

    const handleHide = () => setIsHidden(!isHidden)

    const [showText, setShowText] = useState(false);

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
                <div className='togglegrades'>
                    <button onClick={() => {setShowText(!showText); handleHide()}}>
                    {!isHidden ? (
                            <FontAwesomeIcon icon={faMinus} size='3x' />
                        ) : (
                            <FontAwesomeIcon icon={faPlus} size='3x' />
                        )}
                    </button>
                </div>
                {showText && <div>
                <br></br>
                    <p>Test 1: {props.grades[0]}%</p>
                    <p>Test 2: {props.grades[1]}%</p>
                    <p>Test 3: {props.grades[2]}%</p>
                    <p>Test 4: {props.grades[3]}%</p>
                    <p>Test 5: {props.grades[4]}%</p>
                    <p>Test 6: {props.grades[5]}%</p>
                    <p>Test 7: {props.grades[6]}%</p>
                    <p>Test 8: {props.grades[7]}%</p>
                    <br></br>
                </div>}
                <br></br>
                <Tags></Tags>
            </div>
            <hr></hr>
        </div>
    )
}

export default Student;