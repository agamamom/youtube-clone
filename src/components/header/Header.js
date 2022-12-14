import React, { useState } from 'react'
import "./_header.scss"

import { FaBars } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { MdNotifications, MdApps } from "react-icons/md"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

const Header = ({ handleToggleSidebar }) => {
    const navigate = useNavigate()

    const [input, setInput] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search/${input}`)
    }
    return (
        <div className='header'>
            <FaBars className='header__menu' size={26}
                onClick={() => handleToggleSidebar()}
            />
            <Link to={"/"}>
                <img
                    src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
                    alt=''
                    className='header__logo'
                />
            </Link>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Search'
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button type="submit">
                    <AiOutlineSearch size={22} />
                </button>
            </form>

            <div className='header__icons'>
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="avatar" />
            </div>
        </div>
    )
}

export default Header