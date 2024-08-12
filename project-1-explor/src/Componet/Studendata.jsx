import { Component } from "react";
import "./style.css"

class Studentdata extends Component {

    constructor(Student) {
        super();
        this.state = {
            data: Student.data
        }
    }

    render() {
        return (
            <div className="filter">
                <h1>Student Data Table</h1>
                <table>
                    <thead style={{ fontSize: '25px' }}>
                        <tr>
                            <th>Grid</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Course</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((Student) => {

                                return (
                                    <tr>
                                        <td>{Student.grid}</td>
                                        <td>{Student.name}</td>
                                        <td>{Student.email}</td>
                                        <td>{Student.password}</td>
                                        <td>{Student.course.join(" , ")}</td>
                                        <td>{Student.city}</td>

                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>


            </div>
        )
    }
}
export default Studentdata