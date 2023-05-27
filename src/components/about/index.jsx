import { useState } from 'react'
import './About.css'

function About() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>About EQUIID</h1>
      <h4>Are you ready for a groundbreaking solution that ensures secure identities and promotes fair pay for all? Look no further! EquiID is a revolutionary decentralized identity system built on the Polygon network, designed to empower individuals and foster equality in the digital era.</h4>
      <div className="card">
        <h2>Features :</h2>
        <h4>Secure Your Identity</h4>
        <p>
        Utilize the power of blockchain technology and the robustness of the Polygon network to create a tamper-proof identity that puts you in control.
        </p>
        <h4>Promote Fair Pay</h4>
        <p>
        EquiID tackles wage disparity head-on, leveraging decentralized innovation to ensure fair and transparent compensation for all.
        </p>
        <h4>Decentralized and Fast</h4>
        <p>
        Built on Polygon, EquiID offers lightning-fast transactions and scalability, ensuring an efficient and seamless experience for all users.
        </p>
        <h4>Privacy and security</h4>
        <p>
        Your personal information is protected with advanced encryption and privacy controls, giving you peace of mind in a world of increasing digital threats.
        </p>
      </div>
      <div>
        <h2>Our mission</h2>
        <p>
        At EquiID, we believe in a future where everyone has equal access to secure identities and fair compensation. Our mission is to create a decentralized identity system that empowers individuals and promotes equality in every aspect of life. By leveraging the power of blockchain technology and partnering with Polygon, we are reshaping the digital landscape, one identity at a time.
        </p>
        <h2>Our values</h2>
        <p>Equality: We are committed to building a platform that ensures equal opportunities and fair treatment for all, regardless of gender, race, or background.
Empowerment: EquiID empowers individuals to take control of their identities, enabling them to participate fully in the digital economy.
Innovation: By harnessing the potential of blockchain and the efficiency of Polygon, we are at the forefront of technological advancements, driving positive change.

Take the first step towards a future with secure identities and fair pay. Use the EquiID today!
</p>
      </div>
    </>
  )
}

export default About
