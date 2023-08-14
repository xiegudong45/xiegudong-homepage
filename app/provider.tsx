'use client'

import { ChakraProvider } from "@chakra-ui/react";
import MyTheme from "@/app/theme";

export function Providers({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <ChakraProvider theme={MyTheme}>
            {children}
        </ChakraProvider>
    )
}