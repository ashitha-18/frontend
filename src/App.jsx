import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
//import Header from "./components/Header";
import LandingInfo from "./components/LandingInfo";
import axios from "axios";

function App() {
  const [address, setAddress] = useState();
  const [selectedAadhar, setSelectedAadhar] = useState("");
  const [selectedPaySlip, setSelectedPaySlip] = useState("");

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic or data processing here
    const formData = new FormData();
    formData.append("address", address);
    formData.append("detailsfile", selectedAadhar);
    formData.append("payslipfile", selectedPaySlip);

    axios
      .post("http://localhost:3000/register", formData)
      .then(() => {
        alert("File Upload success");
      })
      .catch(() => alert("File Upload Error"));
  };

  return (
    <div className="flex flex-col px-40 py-10 gap-y-10 w-screen h-screen">
      <Header address={address} setAddress={setAddress} />
      <div className="flex gap-x-2 items-center h-full">
        <div className="w-1/2">
          <LandingInfo />
        </div>

        <div className="flex">
          <form method="POST" onSubmit={handleSubmit}>
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
                onChange={(event) => {
                  console.log(event.target?.files?.[0]);
                  // @ts-expect-error
                  setSelectedAadhar(event.target?.files?.[0]);
                }}
                required
              />
            </div>
            <div className="mt-5">
              <label htmlFor="payslipfile">Upload Pay Slip :</label>
              <input
                type="file"
                id="payslipfile"
                name="payslipfile"
                onChange={(event) => {
                  console.log(event.target?.files?.[0]);
                  // @ts-expect-error
                  setSelectedPaySlip(event.target?.files?.[0]);
                }}
                required
              />
            </div>
            <div className="mt-5 p-2 border-1 border-black">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
