import { Box, Link, Typography } from "@mui/material"
import React from "react"
import Tip from "./Tip"

const Tips = () => (
  <Box sx={{ mt: 2 }}>

    <Tip title="How is the code organized?">
      <Typography>
        The Typescript/React app that is responsible for rendering this screen
        is located in the <code>app/javascript</code> directory.
      </Typography>

      <Typography sx={{ mt: 1 }}>
        The back-end code responsible for the GraphQL api is located in{" "}
        <code>app/graphql</code>. Rails serves the API at the{" "}
        <code>/graphql</code> endpoint using the <code>GraphQLController</code>.
        The <code>QueryType</code> controls what GraphQL queries are available
        in the API and the <code>MutationType</code>
        controls which mutations are available.
      </Typography>

      <Typography sx={{ mt: 1 }}>
        The rest of the directories in the app are for Ruby on Rails
      </Typography>
    </Tip>

    <Tip title="How does the UI communicate with the API?">
      <Typography>
        The react app uses <Link href="https://relay.dev">Relay</Link> to talk to the
        GraphQL API.
      </Typography>
    </Tip>
  </Box>
)

export default Tips
