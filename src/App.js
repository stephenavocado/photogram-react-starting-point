import React from "react";
import { AuthenticationContextProvider } from "./services/authentication/authentication.context";
import { FeedContextProvider } from "./services/feed/feed.context";
import { Navigation } from "./navigation/navigation";

export default function App() {
  return (
    <AuthenticationContextProvider>
      <FeedContextProvider>
        <Navigation />
      </FeedContextProvider>
    </AuthenticationContextProvider>
  );
};