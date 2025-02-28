import React from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";


Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.POOL_ID!,
      userPoolClientId: process.env.CLIENT_ID!,
    },
  },
});

const Auth = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Authenticator>{() => <>{children}</>}</Authenticator>
    </div>
  );
};

export default Auth;
