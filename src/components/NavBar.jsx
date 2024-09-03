import React, { useEffect, useState } from 'react'

const NavBar = () => {
  // To change the navbar styling to dark syling on scrolling to ligher section of the page
  const [isScrolled, setIsScrolled] = useState(false);

  //Executed only once when the component is loaded
  useEffect(() => {
    window.addEventListener('scroll', () => {
      //Provide the value of the scroll position from the top
      window.scrollY > 100 ? setIsScrolled(true) : setIsScrolled(false);
    })
  }, [])

  return (
<nav className={`w-full fixed top-0 left-0 right-0 flex justify-around items-center p-4 mb-1 z-10 text-white ${isScrolled ? 'dark-navbar' : ''}`}>
         <a href="/" className="flex gap-2 items-center text-xl font-semibold">
          <span>ZeroHungerApp</span>
        </a>

        <ul className='flex gap-5 mr-15'>
            <li>Home</li>
            <li>Volunteer</li>
            <li>Food Stamps</li>
            <li>Locations</li>
            <li>About</li>
        </ul>
    </nav>
  )
}

export default NavBar