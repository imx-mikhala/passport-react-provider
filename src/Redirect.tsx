import { Box, Icon } from "@biom3/react";
import { passport } from "@imtbl/sdk";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const Redirect = () => {
  const navigate = useNavigate();
  const {
    passportInstance,
  } = passport.usePassport();

  useEffect(() => {
    if (!passport) {
      console.log('Passport instance not found when redirecting');
      navigate('/');
      return;
    }

    // Redirect after 2 seconds (2000 milliseconds)
    const timer = setTimeout(() => {
      passportInstance.loginCallback();
      navigate('/');
    }, 2000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate, passportInstance]);

  return (
    <Box>
      <Icon icon="Loading" /> Redirecting...
    </Box>
  )
};
