/* eslint-disable react/prop-types */
import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";

function Header(props) {
  const [network, setNetwork] = useState("");
  // eslint-disable-next-line react/prop-types
  const { address, setAddress } = props;
  // const { account, setAccount, network, setNetwork, setAuthReady } = props;
  function handleChange() {
    window.location.reload();
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const connectWallet = async () => {
    console.log("in connect wallet");
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setAddress(accounts[0]);
      await checkNetwork();
      // setAuthReady(true);
    } catch (err) {
      console.error(err);
    }
  };

  const checkNetwork = async () => {
    try {
      const { ethereum } = window;
      const chainId = await ethereum.request({
        method: "eth_chainId",
      });
      setNetwork(chainId);
      console.log(chainId);
    } catch (err) {
      console.error(err);
    }
  };

  const switchNetwork = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x13881" }],
        });
        window.ethereum.on("chainChanged", handleChange);
      } catch (error) {
        console.log(error.code);
        if (error.code === 4902) {
          try {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: "0x13881",
                  chainName: "Polygon Mumbai Testnet",
                  rpcUrls: ["https://matic-mumbai.chainstacklabs.com"],
                  nativeCurrency: {
                    name: "Mumbai Matic",
                    symbol: "MATIC",
                    decimals: 18,
                  },
                  blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
                },
              ],
            });
            window.ethereum.on("chainChanged", handleChange);
          } catch (error) {
            console.log(error);
          }
        }
        console.log(typeof error);
      }
    } else {
      // If window.ethereum is not found then MetaMask is not installed
      alert(
        "MetaMask is not installed. Please install it to use this app: https://metamask.io/download.html"
      );
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Make sure you have metamask!");
        alert("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setAddress(account);
        await checkNetwork();
        ethereum.on("accountsChanged", handleChange);

        //setAuthReady(true);
      } else {
        console.log("No authorized account found");
      }
    } catch (err) {
      console.error(err);
    }
  };
  console.log(address);

  const renderButton = () => {
    if (address && network != "0x13881") {
      return (
        <Button variant="outline" onClick={switchNetwork}>
          Switch To Mumbai
        </Button>
      );
    }
    return (
      <Button variant="outline" onClick={connectWallet}>
        <p className="text-black">
          {address ? (
            <a>
              Wallet: {address.slice(0, 6)}...{address.slice(-4)}
            </a>
          ) : (
            <a>Connect Wallet</a>
          )}
        </p>
      </Button>
    );
  };
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-x-2">
        <img src="/logo.svg" />
        <span className="text-2xl font-bold">EQUIID</span>
      </div>
      {renderButton()}
      {/* <Button colorScheme="black" variant="outline" onClick={}>
        Connect Wallet
      </Button> */}
    </div>
  );
}

export default Header;
