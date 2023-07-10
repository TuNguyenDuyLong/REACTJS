import React from 'react';
import Childcomponent from './ChildComponent'
import AddComponent from './AddComponent'
class Component extends React.Component {
    state = {
        arrayJob: [
            { id: '001', title: 'Dev', Salary: '500$' },
            { id: '002', title: 'Tes', Salary: '600$' },
            { id: '003', title: 'BA', Salary: '800$' }
        ]
    }
    AddNewJob = (Job) => {
        let currenjob = this.state.arrayJob;
        currenjob.push(Job)
        this.setState({
            arrayJob: currenjob

            //Cách 2: arrayJob: [...this.state.arrayJob, Job]

        })
    }
    DeleteAJob = (Job) => {
        let currenjob = this.state.arrayJob
        currenjob = currenjob.filter(item => item.id !== Job.id)
        this.setState({
            arrayJob: currenjob
        })
    }
    render() {
        return (
            <>
                <AddComponent
                    AddNewJob={this.AddNewJob} />
                {/* <div>Full name {this.state.FisrtName} {this.state.LastName}</div> */}

                <Childcomponent
                    arrayJob={this.state.arrayJob}
                    DeleteAJob={this.DeleteAJob} />
            </>
        );
    }
}

export default Component;