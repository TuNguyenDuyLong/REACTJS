import React from 'react';
class AddComponent extends React.Component {
    state = {
        title: '',
        Salary: '',
    }
    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    hahandleChangeSalary = (event) => {
        this.setState({
            Salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault() // Sự kiện không cho load lại trang
        this.props.AddNewJob({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            Salary: this.state.Salary
        })
    }
    render() {
        return (
            <form>

                <label htmlFor="fname">Title Job:</label><br />
                <input type="text" value={this.state.title}
                    onChange={(event) => this.handleChangeTitleJob(event)} /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input type="text" value={this.state.Salary}
                    onChange={(event) => this.hahandleChangeSalary(event)} /><br /><br />
                <input type="submit" value="submit"
                    onClick={(event) => this.handleSubmit(event)} // Sự kiện không cho load lại trang


                />
            </form>

        )
    }
}
export default AddComponent
