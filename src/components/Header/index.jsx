import { Button } from "@chakra-ui/react";

function Header({ account, network, setAccount, setAuthReady, setNetwork }) {
  function handleChange() {
    window.location.reload();
  }

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
      setAccount(accounts[0]);
      await checkNetwork();
      setAuthReady(true);
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
        setAccount(account);
        await checkNetwork();
        ethereum.on("accountsChanged", handleChange);
        ethereum.on("chainChanged", handleChange);
        setAuthReady(true);
      } else {
        console.log("No authorized account found");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const renderButton = () => {
    if (account && network != "0x13881") {
      return (
        <Button variant="outline" handleClick={switchNetwork}>
          Switch To Mumbai
        </Button>
      );
    }
    return (
      <Button variant="outline" onClick={connectWallet}>
        <p className="text-black">
          {account ? (
            <a>
              Wallet: {account.toString().slice(0, 6)}...
              {account.toString().slice(-4)}
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
