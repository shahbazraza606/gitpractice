import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return(
        <div className='navbar'>
        <div className='n-right'>
        <div className='n-name'>Shahbaz</div>
        </div>
        <div className='n-right'>
        <div className='list'>
            <ul style={{listStyleType : 'none'}}>
                <li>Home</li>
                <li>Attendance</li>
                <li>Marks</li>
                <li>Transcript</li>
                
            </ul>
            </div>
        </div>
        </div>
    )
}
export default Navbar;