import React, { useEffect, useState } from 'react'
import { allFontsLink } from '../utils/helpers';
function Fonts() {
    

    const [fontsNames, setFontNames] = useState([])
    useEffect(() => {
   const generateFonts = async () => {
        const response = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_FONTS_API_KEY}`)
        const data = ((await response.json()).items);
         const names = data?.map(el => el.family)
         setFontNames(names);
    }
     generateFonts();
    },[])
    
  return (
    <select className='dropdown-fontFamily'>
      <option selected disabled value="">select font</option>
        {
            fontsNames?.map((el, i) => (<option className='dropdown-item' key={i} style={{fontFamily: el.family}}>{el.family} </option>))
        }
        </select>
  )
}

export default Fonts
