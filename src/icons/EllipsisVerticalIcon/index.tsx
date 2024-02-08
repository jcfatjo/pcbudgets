import { Icon } from "@chakra-ui/react";
import React from "react";

const EllipsisVerticalIcon: React.FC = props => {
    return (
        <Icon viewBox="0 0 128 512" {...props}>
            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm56-104A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
        </Icon>
    );
};

export default EllipsisVerticalIcon;
