import { Button } from "@chakra-ui/react";

export default function Header() {
  const handleButtonClick = () => {
    // Placeholder function for button click event
    console.log("Button clicked!");
  };

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-x-2">
        <img src="/logo.svg" alt="Logo" />
        <span className="text-2xl font-bold">EQUIID</span>
      </div>
  
      <Button colorScheme="black" variant="outline" onClick={handleButtonClick}>
        Connect Wallet
      </Button>
    </div>
  );
}
