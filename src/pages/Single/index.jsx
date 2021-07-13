import React from 'react'
import { SideBar, SinglePost } from '../../components'
import './single.css'

export default function Single() {
    return (
        <div className="single">
            <SinglePost/>
            <SideBar/>
        </div>
    )
}
