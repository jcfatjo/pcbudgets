import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

import BudgetComponentRow from "@/components/BudgetTable/BudgetComponentRow";
import { type BudgetTableProps } from "@/components/BudgetTable/BudgetTable";

const BudgetTable: React.FC<BudgetTableProps> = ({ budget }) => {
    return (
        <TableContainer>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Options</Th>
                        <Th>Type of component</Th>
                        <Th>Component</Th>
                        <Th isNumeric>Price</Th>
                        <Th isNumeric>Quantity</Th>
                        <Th isNumeric>Total</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {Object.values(budget.components).map(components => (
                        <>
                            {components.map((component, index) => (
                                <BudgetComponentRow key={`${component.type}-${index}`} component={component} />
                            ))}
                        </>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default BudgetTable;
