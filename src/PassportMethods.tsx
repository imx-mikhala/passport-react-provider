import { Body, Box, Button } from "@biom3/react";
import { passport } from "@imtbl/sdk";

export const PassportMethods = () => {
  const {
    passportInstance,
    isLoggedIn,
    login,
    logout,
    accounts,
  } = passport.usePassport();

  const onConnect = async () => {
    if (!passportInstance) {
      console.error('Passport instance not found.');
      return;
    }
    login();
  };

  const onLogout = async () => {
    logout();
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
      {!isLoggedIn &&
        <Button onClick={onConnect} >
          Connect to Passport
        </Button>
      }
      {isLoggedIn && 
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Body>Wallet address: { accounts[0] }</Body>
          <Spacer />
          <Button onClick={onLogout}>Logout</Button>
        </Box>
      }
    </Box>
  )
};
