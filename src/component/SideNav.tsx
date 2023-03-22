import React from 'react'
import Image from '../images/queenfisher-logo.png'
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import ArchiveSharpIcon from '@mui/icons-material/ArchiveSharp';
import LogoutIcon from '@mui/icons-material/Logout';

const SideNav = () => {
  return (
    <div className='sidebar'>
      <div className="top"><img src={Image} className='sidenav-logo'></img></div>
      <hr/>
      <div>
        <ul>
          <li>
              <EventNoteOutlinedIcon/>
              Timetable
          </li>
          <li>
            <MenuBookTwoToneIcon/>
            Recipe
          </li>
          <li>
            <ArchiveSharpIcon/>
            Archive
          </li>
        </ul>
        <hr/>
        <ul>
          <li>
            <LogoutIcon/>
            Logout
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideNav