import React, {useState} from 'react'

export const Content = () => {
    const [blockX, setBlockX] = useState("20")

    const handleOffset = (e) => {
        console.log(e)
        e.pageX += 50
    }

    return (
        <div className='relative'>
            <div className={`absolute left-${blockX}`}  onClick={handleOffset}>
                <p>text</p>
            </div>
        </div>
    )
}