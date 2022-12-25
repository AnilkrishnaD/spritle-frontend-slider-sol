import Cookies from "js-cookie";
import { Component } from "react";
import {NavLink} from "react-router-dom";


import './index.css'

class Profile extends Component {

    state = {profielPic: '', address: '', phone: '', dob: '', username: '', detailsFilled: false}

    onChangeProfilePic = event => {
        this.setState({profielPic: event.target.file})
    }

    onChangeUserName = event => {
        this.setState({username: event.target.value})
    }

    onChangeMobileNo= event => {
        this.setState({phone: event.target.value})
    }

    onChangeAddress = event => {
        this.setState({address: event.target.value})
    }

    onChangeDob = event => {
        this.setState({dob: event.target.value})
    }




    renderProfilePicContainer = () => {
        const {profielPic} = this.state
        return (

        <div className="details-container">
            <label htmlFor="profilepic" className="label">Profile pic</label>
            <input className="input" type="file" id="profilepic" value={profielPic} accept="image.png, image.jpeg" onChange={this.onChangeProfilePic}/>
        </div>
        )
    }

    renderUsernameConatiner = () => {
        const {username} = this.state
        return (
            <div className="details-container">
              <label htmlFor="username" className="label">Username</label>
              <input  className="input" type="text" placeholder="Enter your name" id="username" value={username} onChange={this.onChangeUserName}/>
            </div>
        )
    }

    renderDobContainer = () => {
        const {dob} = this.state
        return (
            <div className="details-container">
             <label htmlFor="dob" className="label">DateOfBirth</label>
             <input className="input" id="dob" type="date" value={dob} onChange={this.onChangeDob}/>
            </div>
        )
    }

    renderAddressContainer = () => {
        const {address} = this.state

        return(
            <div className="details-container">
                <label htmlFor="address" className="label">Address</label>
                <textarea rows="4" cols="50" value={address} placeholder="Enter your address" onChange={this.onChangeAddress} className="address"></textarea>
            </div>
        )
    }


    renderMobileNumberContainer = () => {
        const {phone} = this.state

        return (
            <div className="details-container"> 
              <label htmlFor="mobile" className="label">Mobile Number</label>
              <input className="input" type="text" placeholeder="Enter Mobile Number" id="mobile" value={phone} onChange={this.onChangeMobileNo}/>
            </div>
        )
    }


    onProfileDetails = event => {
        event.preventDefault()
        // console.log(history)
        this.setState({detailsFilled: true})

    }

    onClickLogOut = () => {
        Cookies.remove('jwtToken')
    }




    render() {

        const {detailsFilled} = this.state
        console.log(detailsFilled)

        if (detailsFilled) {
            return (
                <div className="thanks-container">
                    <h1 className="heading">Thank you Spritle</h1>
                    <NavLink to="codingquestion">
                        <button type="text" className="opencode-button">
                            Open Coding Question
                        </button>
                    </NavLink>
                    
                </div>
            )
        }
        else {
         return (
            <div className="app-container">
               <form className="form-container" onSubmit={this.onProfileDetails}>
                   {this.renderProfilePicContainer()}
                   {this.renderUsernameConatiner()}
                   {this.renderDobContainer()}
                   {this.renderAddressContainer()}
                   <button type="submit" className="button">Update Details</button>
               </form>

               <button type="button" className="logout">Logout</button>
            </div>
        )
        }
    }

}

export default Profile