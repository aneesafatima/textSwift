import React from 'react'

function TextSize() {
    const textSizes = [8,9,10,11,12,14,16,18,20,22,24,26,28,36,48,72]
  return (
        <ul className='dropdown-list'>
            {
                textSizes.map((el,i) => (
                    <li className='dropdown-list-item' key={i}>
                        {el}
                    </li>
                ))
            }
        </ul>
 
  )
}

export default TextSize
