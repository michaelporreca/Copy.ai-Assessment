import React, { Component } from 'react'
import axios from '../../axios'

export default class students extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Students: []
        };
    }

    getStudentData() {
        axios
            .get(`/`, {})
            .then(res => {
                const data = res.data
                console.log(data)

                const users = data.students.map(u =>
                    <div class="students">
                        <div class="studentimg">
                            <img src={u.pic}></img>
                        </div>
                        <p><h2>{u.firstName} {u.lastName}</h2></p>
                        <div class="studentinfo">
                            <p>Email: {u.email}</p>
                            <p>Company: {u.company}</p>
                            <p>Skill: {u.skill}</p>
                            <p>Average: {u.grades.reduce((sum, curr) => sum + Number(curr), 0) / u.grades.length}%</p>
                        </div>
                        <hr></hr>
                    </div>
                    )
                
                this.setState({
                    users
                })
            })

            .catch((error) => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.getStudentData()
    }

    render() {
        return (
            <div>{this.state.users}</div>
        )
    }
}