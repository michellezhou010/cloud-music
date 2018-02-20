// 引入react
import React, { Component } from 'react'
import '../styles/loginHome.less'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

class LoginHome extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className='login-home'>
                <img src='/imgs/logo.png'/>
                <Link to='/login' className='login-btn' >Login</Link>
                <Link to='/register' className='register-btn' >New User Register</Link>
                <p><Link to='/'>Just Try</Link></p>
                <p className='other-login-title'>
                    <span>------ Others ------</span>
                </p>
            </div>
        )
    }
}

function select(state){
    return{

    }
}

export default connect(select) (LoginHome);
