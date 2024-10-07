import React from 'react';
import { student, students } from '../data/data';

const Student = () => {

    // const name = "홍길동";
    // const age = "20";
    // const addr = "seoul";

    return (
        <div className='student'>
            <h3>{student.name}({student.age}) : {student.addr}</h3>
            {
                students.map(s => (
                    <h2>{s.name}({s.age}) : {s.addr}</h2>
                ))
            }
        </div>
    );
};

export default Student;