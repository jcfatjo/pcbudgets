import { Td, Tr } from "@chakra-ui/react";
import React from "react";

import { type BudgetComponentRowProps } from "@/components/BudgetTable/BudgetComponentRow/BudgetComponentRow";
import EllipsisVerticalIcon from "@/icons/EllipsisVerticalIcon";

const BudgetComponentRow: React.FC<BudgetComponentRowProps> = ({ component: { type, brand, model, price, quantity } }) => {
    return (
        <Tr>
            <Td>
                <EllipsisVerticalIcon />
            </Td>
            <Td>{type}</Td>
            <Td>
                {brand} {model}
            </Td>
            <Td isNumeric>{price}€</Td>
            <Td isNumeric>{quantity}</Td>
            <Td isNumeric>{price * quantity}€</Td>
        </Tr>
    );
};

export default BudgetComponentRow;
