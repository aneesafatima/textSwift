import React from 'react'

function TextSize() {
    const textSizes = [8,9,10,11,12,14,16,18,20,22,24,26,28,36,48,72]
  return (
        <select className='dropdown-fontSize' >
            <option selected disabled>select size</option>
            {
                textSizes.map((el,i) => (
                    <option className='dropdown-list-item' key={i}>
                        {el}
                    </option>
                ))
            }
        </select>
 
  )
}

export default TextSize
