import React, { useState } from "react";
import { Button, Heading, Box, globalStyles, fontsImport } from "@ace-ex/react";

export function App() {
  globalStyles();
  fontsImport();
  const [count, setCount] = useState(0);

  const text = "Django + React + Webpack + Babel = Awesome App";
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "$2",
        mt: "$10",
        maxWidth: "520px",
        mx: "auto",
      }}
    >
      <Heading as="h1">{text}</Heading>
      <Box css={{ width: "50%" }}>
        <Button
          variant="secondary"
          fullWidth
          onClick={() => setCount(count + 1)}
        >
          {count}
        </Button>
      </Box>
    </Box>
  );
}
