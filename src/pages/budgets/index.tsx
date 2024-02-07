import { List, ListItem } from "@chakra-ui/react";
import React from "react";

import { useBudgets } from "@/pages/budgets/Budgets";

const Budgets: React.FC = () => {
    const { budgets } = useBudgets();

    return (
        <List>
            {budgets.map(({ id, name }) => (
                <ListItem key={id}>{name}</ListItem>
            ))}
        </List>
    );
};

export default Budgets;
