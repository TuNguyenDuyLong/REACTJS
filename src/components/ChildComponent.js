import React from 'react';

class Childcomponent extends React.Component {
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

            </>
        );
    }
}

export default Childcomponent;