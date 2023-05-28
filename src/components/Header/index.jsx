import { useState } from 'react'

function Header() {
    const [count, setCount] = useState(0)
    return (
        <div>
        <a href="src\components\about\index.jsx">Home</a>
        <a href="">About Us</a>
        <a href=""> How to Use</a>
        <a href="">Get verified</a>
    </div>

    )
        
           
}

export default Header