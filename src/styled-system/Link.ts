import styled, { ConfigStyle } from "styled-components";
import { system } from "styled-system";

export const Link = styled.a`
  ${system({
    textDecoration: true,
    fontWeight: {
      property: "fontWeight",
      scale: "fontWeights"
    }
  })}
`;
