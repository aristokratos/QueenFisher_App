
import Image from '../images/queenfisher-logo.png'
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import ArchiveSharpIcon from '@mui/icons-material/ArchiveSharp';
import LogoutIcon from '@mui/icons-material/Logout';
import './sidenav.css'

const SideNav = () => {
  return (
    <>
     <section className='sidebar'>
      <div className='sidebar-container'>
        <img src={Image} className='sidenav-logo'></img>
      </div>
    <div className='sidebar-items'>
      <ul>
        <li className='sidebar-element'>
            <EventNoteOutlinedIcon/>
            Timetable
        </li>
        <li className='sidebar-elementother'>
          <MenuBookTwoToneIcon/>
          Recipe
        </li>
        <li className='sidebar-elementother'>
          <ArchiveSharpIcon/>
          Archive
        </li>
      </ul>
      <hr/>
      <ul>
        <li className='sidebar-logout'>
          <LogoutIcon/>

          Logout
        </li>
      </ul>
    </div>
  </section>
    
    </>
   
  )
}

export default SideNav