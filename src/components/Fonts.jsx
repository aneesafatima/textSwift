import React, { useEffect, useState } from 'react'
import { allFontsLink } from '../utils/helpers';
function Fonts() {
    
    const [fontData, setFontData] = useState([]);
    const [fontsNames, setFontNames] = useState([])
    useEffect(() => {
   const generateFonts = async () => {
        const response = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_FONTS_API_KEY}`)
        setFontData((await response.json()).items);
        setFontNames(fontData?.map(el => el.family))
         allFontsLink(fontsNames);
    }
     generateFonts();
    },[])
    
  return (
    <ul className='dropdown-list'>
        {
            fontData?.map((el, i) => (<li className='dropdown-list-item' key={i} style={{fontFamily: el.family}}>{el.family} </li>))
        }
        </ul>
  )
}

export default Fonts
