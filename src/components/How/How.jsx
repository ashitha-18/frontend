import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './How.css'

function How() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>EquiID - Your Gateway to Identity Security</h1>
      <p>
      Using EquiID is simple and intuitive. Follow these steps to secure your identity and promote fair pay:
      </p>
      <p>
        - Connect your wallet <br></br>
        - Upload your Aadhar card file<br></br>
        - Upload your salary slip<br></br>
        - Click the submit button<br></br>
      </p>
      <p>
      By following these steps, you'll have successfully utilized EquiID to secure your identity and promote fair pay. Enjoy the benefits of a decentralized identity system that empowers you and helps bridge the gender pay gap!

      </p>
    </>
  )
}

export default How
