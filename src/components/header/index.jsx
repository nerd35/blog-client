import React from 'react'
import "./header.css"
import headerImg from '../../assets/images/hero.jpg'

export default function Header() {
    return (
        <div className="header">
            <div className="header-title">
                <span className="header-title-sm">Self Session</span> 
                
            </div>
            <img className="header-img" src={headerImg} alt="headerimg"/>
        </div>
    )
}
