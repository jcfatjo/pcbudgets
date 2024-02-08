import { Link, List, ListItem } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

import { useBudgets } from "@/pages/budgets/Budgets";

const Budgets: React.FC = () => {
    const { budgets } = useBudgets();

    return (
        <List>
            {budgets?.map(({ id, name }) => (
                <ListItem key={id}>
                    <Link as={NextLink} href={`/budgets/${encodeURIComponent(id)}`}>
                        {name}
                    </Link>
                </ListItem>
            ))}
        </List>
    );
};

export default Budgets;
