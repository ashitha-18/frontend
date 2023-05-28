import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import Header from "./components/Header";
import "./index.css";
//import Header from "./components/Header";
import LandingInfo from "./components/LandingInfo";

function App() {
  const [address, setAddress] = useState(
    "0xbc7D860f6e8ceC925d411F868b76098B44Dc4Fa6"
  );
  const [formData, setFormData] = useState({
    detailsFile: "",
    payslipFile: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Perform form submission logic or data processing here
  //   console.log(formData);
  // };

  return (
    <div className="flex flex-col px-40 py-10 gap-y-10 w-screen">
      <Header />
      <div className="flex gap-x-2 items-center h-full">
        <div className="w-1/2">
          <LandingInfo />
        </div>

        <div className="flex">
          <form action="http://localhost:3000/register" method="POST">
            <div className="mt-5">
              <input
                type="hidden"
                id="address"
                name="address"
                value={address}
                required
              />
              <label htmlFor="detailsfile">Upload Aadhaar Card :</label>
              <input
                type="file"
                id="detailsfile"
                name="detailsfile"
                // value={formData.detailsFile}
                // onChange={handleInputChange}
                required
              />
            </div>
            <div className="mt-5">
              <label htmlFor="payslipfile">Upload payslipFile Slip :</label>
              <input
                type="file"
                id="payslipfile"
                name="payslipfile"
                // value={formData.payslipFile}
                // onChange={handleInputChange}
                required
              />
            </div>
            <div className="mt-5">
              <Center h="100px" color="white">
                <Button colorScheme="black" type="submit">
                  Submit
                </Button>
              </Center>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
