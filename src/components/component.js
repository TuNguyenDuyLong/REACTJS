// const Login = () => {
//     let name = 'Từ Nguyễn Duy Long';
//     return (

//         // <> các khối div bên trong</>  hoặc react.Fragment // Có thể xuất ra các khối div mà không cần hàm div bao bọc 
//         <>
//             <div className='Heading'>
//                 MY COMPONENT. JS
//             </div>
//             <div className='fisrt'>Hello my component, my name is {name}
//                 {/* {console.log('##############################')} */}
//             </div>

//         </>
//     )
// }

// export default Login;
import React from 'react';

class Component extends React.Component {
    state = {
        //     Name: 'Duy Long',
        //     task: 'Welcome to my State'
    };

    // handleOnChangeName = (event) => {
    //     this.setState({
    //         Name: event.target.value
    //     });
    // };
    // handleClickButton = () => {
    //     alert('Xin chào bạn')
    // }

    render() {
        return (
            <>
                {/* <div className='name'>TU NGUYEN DUY LONG</div>
                <div className='nhapten'>
                    <input value={this.state.Name} type="text" onChange={this.handleOnChangeName} />
                    <br />
                    My name is: {this.state.Name}
                </div>
                <div>
                    {this.state.task}
                </div>
                <div className='Button'>
                    <button onClick={() => this.handleClickButton()}> Click me</button>
                </div> */}
                <div> HELLO FORM</div>
            </>
        );
    }
}

export default Component;

