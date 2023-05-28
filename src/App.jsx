import { useState } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
function App() {
  const [formData, setFormData] = useState({
    Adhaar: '',
    Pay: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic or data processing here
    console.log(formData);
  };


  return (
    <>
    <div>
    <Center h='100px' color='black'>
    <Heading>EQUIID</Heading>
    </Center>
    <Center h='100px' color='black'>

    <h4 className='sub'>Are you ready for a groundbreaking solution that ensures secure identities and promotes fair pay for all? Look no further! EquiID is a revolutionary decentralized identity system built on the Polygon network, designed to empower individuals and foster equality in the digital era.</h4>
    </Center>
    </div>
    <form onSubmit={handleSubmit}>
    
      <div>
      <Center h='100px' color='black'>
        <label htmlFor="Adhaar">Upload Adhaar Card :</label>
        <input
          type="file"
          id="Adhaar"
          name="Adhaar"
          value={formData.Adhaar}
          onChange={handleInputChange}
        />
        </Center>
      </div>
      <div>
      <Center h='100px' color='black'>
      <label htmlFor="Pay">Upload Pay Slip :</label>
        <input
          type="file"
          id="Pay"
          name="Pay"
          value={formData.Pay}
          onChange={handleInputChange}
        />
        </Center>
      </div>
      <div>
      <Center h='100px' color='white'>
      <Button colorScheme='blue'type="submit">Submit</Button>
      </Center>
      </div>
    </form>
    </>
  )
}

export default App
