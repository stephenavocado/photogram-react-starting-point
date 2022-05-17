import React from "react";
import { AuthenticationContextProvider } from "./services/authentication/authentication.context";
import { Navigation } from "./navigation/navigation";

export default function App() {
  return (
    <AuthenticationContextProvider>
      <Navigation />
    </AuthenticationContextProvider>
  );
};