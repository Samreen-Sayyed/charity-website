import React from 'react'
import "../Home/Home.css"
import FirstSection from './Sections/firstSection/firstSection.jsx'
import SecondSection from './Sections/secondSection/secondSection.jsx'
import ThirdSection from './Sections/thirdSection/thirdSection.jsx'
import FourthSection from './Sections/fourthSection/fourthSection.jsx'
import FifthSection from './Sections/FifthSection/fifthSection.jsx'
import SixthSection from './Sections/SixthSection/sixthSection.jsx'
import SeventhSection from './Sections/SeventhSection/seventhSection.jsx'
import TenthSection from './Sections/tenthSection/tenthSection'
const Home = () => {
  return (
    <div className='home-container'>
      < FirstSection />
      < SecondSection />
      < ThirdSection />
      < FourthSection />
      < FifthSection />
      < SixthSection />
      < SeventhSection />
      < TenthSection />
    </div>
  )
}
export default Home