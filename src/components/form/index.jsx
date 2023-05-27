import { useState } from 'react'
import './form.css'
function Form() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div>
        <form action="action_page.php">
        <label for="fname">Upload Adhaar Card   </label>
        <input type="file" /><br></br>
        <label for="lname">Upload pay slip  </label>
        <input type="file" />
        <input type="submit" value="Submit"></input>
        </form>
      </div>
    </>
  )
}

export default Form
