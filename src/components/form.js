import React from 'react';
import Childcomponent from './ChildComponent'
class Component extends React.Component {
    state = {
        FisrtName: '',
        LastName: ''
    }
    handleChangeFisrtName = (event) => {
        this.setState({
            FisrtName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            LastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault() // Sự kiện không cho load lại trang
    }


    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.FisrtName}
                        onChange={(event) => this.handleChangeFisrtName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.LastName}
                        onChange={(event) => this.handleChangeLastName(event)} /><br /><br />
                    <input type="submit" value="submit"
                        onClick={(event) => this.handleSubmit(event)} // Sự kiện không cho load lại trang


                    />
                </form>
                <div>Full name {this.state.FisrtName} {this.state.LastName}</div>

                <Childcomponent />
            </>
        );
    }
}

export default Component;