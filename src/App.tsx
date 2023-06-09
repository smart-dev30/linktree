import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  theme
} from "@chakra-ui/react"
import Profile from "./pages/profile"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" backgroundColor="#f3f3f1">
      <Grid minH="100vh" p={3}>
        <Profile />
      </Grid>
    </Box>
  </ChakraProvider>
)
