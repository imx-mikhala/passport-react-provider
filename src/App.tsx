import { BiomeCombinedProviders } from "@biom3/react";
import { ImmutableConfiguration, Environment } from "@imtbl/sdk/config";
import { PassportProvider } from "@imtbl/sdk/passport";
import { PassportMethods } from "./PassportMethods";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Logout } from "./Logout";
import { Redirect } from "./Redirect";

function App() {
  const PassportModuleConfig = {
    baseConfig: new ImmutableConfiguration({ environment: Environment.SANDBOX }),
    clientId: import.meta.env.VITE_PASSPORT_CLIENT_ID,
    redirectUri: import.meta.env.VITE_PASSPORT_REDIRECT_URI,
    logoutRedirectUri: import.meta.env.VITE_PASSPORT_LOGOUT_REDIRECT_URI,
    audience: 'platform_api',
    scope: 'openid offline_access email transact',
  };

  return (
    <BiomeCombinedProviders>
      <PassportProvider config={PassportModuleConfig}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PassportMethods />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/redirect" element={<Redirect />} />
          </Routes>
        </BrowserRouter>
      </PassportProvider>
    </BiomeCombinedProviders>
  )
}

export default App
