import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const Home: React.FC = () => {
    return (
        <Link as={NextLink} href="/budgets">
            Budgets
        </Link>
    );
};

export default Home;
