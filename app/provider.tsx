'use client'

import { ChakraProvider } from "@chakra-ui/react";
import MyTheme from "@/app/lib/theme";
import Fonts from "@/app/lib/fonts";

export function Providers({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <ChakraProvider theme={MyTheme}>
            <Fonts />
            {children}
        </ChakraProvider>
    )
}