import React from "react";
import { Stack,Box } from "@mui/material";
//import { color, textAlign } from "@mui/system";
import { ShoppingCart } from "@mui/icons-material";


export default function Images(props){
    return (
        <nav>
            <Stack direction="row" justifyContent="center">
            
            <Box sx={
                    {   my: 10,
                        mb: 5,
                        borderRadius: 25,
                        p:5,
                        backgroundColor: 'secondary.dark',
                        justifyContent:'space-between'
                    }
                }>
                <ShoppingCart />
                <span>{props.items}</span>
                <span> Items</span></Box>
            </Stack>
        </nav>
    )
}