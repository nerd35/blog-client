import React from 'react'
import './settings.css'
import { SideBar} from '../../components';
import ProfilePics from '../../assets/images/profilep.JPG'

export default function Settings() {
    return (
        <div className="settings">
            <div className="settings-wrapper">
                <div className="settings-title">
                    <span className="setting-update-title">Update Your Account</span>
                    <span className="setting-delete-title">Delete Your Account</span>
                </div>
                <form action="" className="settings-form">
                    <label>Profile Picture</label>
                    <div className="settings-pp">
                        <img src={ProfilePics} alt="profilep" className="settings-profile-pics"/>
                        <label htmlFor="fileInput">
                            <i className=" settings-profile-icon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: 'none'}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Umukoro"/>
                    <label>Email</label>
                    <input type="email" placeholder="umukoro@gmail.com"/>
                    <label>Password</label>
                    <input type="Password" />
                    <button className="settings-submit">Update</button>
                </form>
            </div>
            <SideBar/>
        </div>
    )
}
