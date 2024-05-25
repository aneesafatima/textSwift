import React, { useEffect, useState } from 'react'
import { allFontsLink } from '../utils/helpers';
import { handleClick } from '../utils/toolbarFeatures';
function Fonts() {
    let c=0,aschii=65, char = String.fromCharCode(aschii);
    const [fontsNames, setFontNames] = useState([])
    const [fontsLoaded, setFontsLoaded] = useState(false)
    useEffect(() => {
   const generateFonts = async () => {
        const response = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_FONTS_API_KEY}`)
        const data = ((await response.json()).items);
         const names = data?.map(el => el.family)
         setFontNames(names);
         if(names.length > 0) setFontsLoaded(true)
         allFontsLink(names)
    }
     generateFonts();
    },[])
    
  return (
    <select className='dropdown-fontFamily' onChange={(e) => handleClick(e, "fontFamily")}>
      <option selected disabled value="">select font</option>
        {  fontsLoaded && 
            fontsNames?.map((el, i) => {
            if(c<10 && (el.startsWith(char.toLowerCase()) || el.startsWith(char)))
              { c++;
                return <option className='dropdown-item' key={i} style={{fontFamily: el}}>{el} </option>
              }
              else if(c==10) {
                aschii+=1;
                char = String.fromCharCode(aschii)
                c=0;
              }
          })
        }
        </select>
  )
}

export default Fonts
