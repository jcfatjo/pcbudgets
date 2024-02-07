import { ChakraProvider } from "@chakra-ui/react";
import React, { type PropsWithChildren } from "react";

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
    return <ChakraProvider>{children}</ChakraProvider>;
};

export default Providers;
