import React from 'react'
import { Link } from 'react-router-dom'
import { FiExternalLink } from "react-icons/fi"
import Image from '../images/image 1.png'
import Image2 from '../images/image 2.png'
import Image3 from '../images/image 3.png'
import Image4 from '../images/Rectangle 1.png'
import Image5 from '../images/Rectangle 2.png'

interface MainHeaderProps { }

const MainHeader: React.FC<MainHeaderProps> = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h1>Make Healthy Life With Queenfisher</h1>
          <p>
            With Queenfisher, users can generate meal timetables based on preferences such as diet type,
            health condition, age, budget, geography.
          </p>
          <Link to="/login" className='btn lg'>Get Started  <FiExternalLink /></Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" className='main__header-image-one' />
            <img src={Image2} alt="Main Header Image2" className='main__header-image-two' />
            <img src={Image3} alt="Main Header Image3" className='main__header-image-three' />
            <img src={Image5} alt="MainHeader Rectangle2" className='main__header-rectangle-two' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
