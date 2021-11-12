import React, { useEffect, useState, useCallback } from 'react';
import axios from '../axios'
import SearchBar from './SearchBar';
import Student from './Student';


const Students = () => {
    const [students, setStudents] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [filteredStudents, setFilteredStudents] = useState(students)

    const getStudentData = useCallback(
        () => {
            axios
                .get(`/`, {})
                .then(res => {
                    const data = res.data

                    setStudents(data.students)
                })

                .catch((error) => {
                    console.log(error)
                })
        },
        [],
    )

    useEffect(() => {
        getStudentData()
    }, [getStudentData])

    const filterStudents = () => {
        const temp = students.filter(el => {
            return el.firstName.toLowerCase().includes(inputValue)
        })
        setFilteredStudents(temp)
    }

    useEffect(() => {
        filterStudents()
    }, [inputValue])

    useEffect(() => {
        setFilteredStudents(students)
    }, [students])

    return (

        <div>
            <SearchBar setInputValue={setInputValue} />
            {filteredStudents.map(student => {
                return <Student
                    key={student.id}
                    pic={student.pic}
                    firstName={student.firstName}
                    lastName={student.lastName}
                    email={student.email}
                    company={student.company}
                    skill={student.skill}
                    grades={student.grades}
                />

            })}
        </div>
    )

}

export default Students;