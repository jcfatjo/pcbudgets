import "@/styles/globals.scss";

import type { AppProps } from "next/app";
import React from "react";

import Providers from "@/wrappers/Providers";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Providers>
            <Component {...pageProps} />
        </Providers>
    );
};

export default App;
