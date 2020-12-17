import * as React from "react";
import { ThemeProvider } from "styled-components";

import "./styles.css";
import { Box } from "./styled-system/Box";
import { Link } from "./styled-system/Link";
import { Button } from "./styled-system/Button";
import { Text } from "./styled-system/Text";

import theme from "./styled-system/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Hello Styled System!</h1>
        <Box color="black" bg="tomato" p={2}>
          Tomato
        </Box>
        <Link textDecoration="underline">ddd</Link>
        <br />
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <br />
        <Text size="big">Custom Prop Name for variant</Text>
        <Text size="small" p={2}>
          Small
        </Text>
      </div>
    </ThemeProvider>
  );
}
