import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
  Box,
  ThemeProvider,
  GlobalStyles,
  Alert,
  AlertTitle,
} from "@mui/material"
import React from "react"
import { RelayEnvironmentProvider } from "react-relay"
import RelayEnvironment from "../relay/RelayEnvironment"
import { brandingDarkTheme } from "../theme"
import BicycleList from "./BicycleList/BicycleList"
import Loading from "./Loading"
import Tips from "./Tips"

const App = () => {
  const links = [
    { text: "GraphQL-Ruby Docs", url: "https://graphql-ruby.org" },
    { text: "Graphiql", url: "/graphiql" },
    { text: "Relay Docs", url: "https://relay.dev" },
    { text: "Material UI Docs", url: "https://mui.com" },
  ]

  return (
    <div>
      <ThemeProvider theme={brandingDarkTheme}>
        <GlobalStyles
          styles={{
            body: { backgroundColor: "rgb(8, 34, 60)" },
            code: {
              backgroundColor: "rgb(0, 30, 60)",
              padding: `0 6px`,
              fontFamily: "monospace",
              color: "rgb(184, 231, 251)",
            },
          }}
        />
        <AppBar position="static">
          <Container>
            <Toolbar
              disableGutters
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="h4" sx={{ mr: 2 }}>
                Bicycles
              </Typography>

              <Box>
                {links.map((link) => (
                  <Button
                    key={link.url}
                    sx={{ my: 2, color: "white", display: "inline" }}
                    href={link.url}
                    target="_blank"
                  >
                    {link.text}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <RelayEnvironmentProvider environment={RelayEnvironment}>
          <React.Suspense fallback={<Loading sx={{ marginTop: 4 }} />}>
            <Container>
              <Alert severity="info" sx={{ mt: 2 }}>
                <AlertTitle> Bicycle Management System</AlertTitle>
                <strong style={{ fontWeight: "bold" }}>
                  A simple CRUD app for Bicycles built with React and Ruby
                </strong>
              </Alert>
              <BicycleList />
              <Tips />
            </Container>
          </React.Suspense>
        </RelayEnvironmentProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
