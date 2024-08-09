import { Box } from "@biom3/react";
import { passport } from "@imtbl/sdk";

export const PassportMethods = () => {
  const {
    passportInstance,
  } = passport.usePassport();

  console.log('passportInstance', passportInstance);

  return (
    <Box>
      Passport Methods
    </Box>
  )
};
