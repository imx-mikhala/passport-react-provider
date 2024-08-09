import { Body, Box, Button } from "@biom3/react";
import { passport } from "@imtbl/sdk";
import { providers } from "ethers";
import { useState } from "react";

export const PassportMethods = () => {
  const {
    passportInstance,
  } = passport.usePassport();

  const [passportWalletAddress, setPassportWalletAddress] = useState<string>("");
  const [zkEvmProvider, setZkEvmProvider] = useState<providers.Web3Provider | null>(null);

  const onConnect = async () => {
    if (!passportInstance) {
      console.error('Passport instance not found.');
      return;
    }
    const provider = passportInstance.connectEvm();
    const [walletAddress] = await provider.request({
      method: 'eth_requestAccounts',
    });
    setPassportWalletAddress(walletAddress);
    setZkEvmProvider(new providers.Web3Provider(provider));
  };

  const onLogout = async () => {
    if (!passportInstance) {
      console.error('Passport instance not found.');
      return;
    }
    await passportInstance.logout();
    setPassportWalletAddress("");
    setZkEvmProvider(null);
  };

  const Spacer = () => <Box sx={{ paddingY: 'base.spacing.x2' }} />;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingY: 'base.spacing.x10'
      }}
    >
      {!passportWalletAddress &&
        <Button onClick={onConnect} >
          Connect to Passport
        </Button>
      }
      {passportWalletAddress && 
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Body>Wallet address: { passportWalletAddress }</Body>
          <Spacer />
          <Button onClick={onLogout}>Logout</Button>
        </Box>
      }
    </Box>
  )
};
