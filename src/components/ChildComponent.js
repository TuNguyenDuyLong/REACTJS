import React from 'react';

class Childcomponent_form extends React.Component {
    // state = {
    //     FisrtName: '',
    //     LastName: ''
    // }
    // handleChangeFisrtName = (event) => {
    //     this.setState({
    //         FisrtName: event.target.value
    //     })
    // }
    // handleChangeLastName = (event) => {
    //     this.setState({
    //         LastName: event.target.value
    //     })
    // }
    // handleSubmit = (event) => {
    //     event.preventDefault() // Sự kiện không cho load lại trang
    // }
    state = {
        showJobs: false
    }

    handleShowHile = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleDelete = (Job) => {
        this.props.DeleteAJob(Job)
    }
    render() {
        let { arrayJob } = this.props
        let { showJobs } = this.state
        return (
            <>
                {showJobs === false &&
                    <div>
                        <button onClick={() => this.handleShowHile()}>Show</button>
                    </div>
                }
                {showJobs &&
                    <>
                        <div className="Job-list">
                            {
                                arrayJob.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.Salary}
                                            <></><spam><button onClick={() => this.handleDelete(item)}>x</button></spam>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHile()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}
export default Childcomponent_form;