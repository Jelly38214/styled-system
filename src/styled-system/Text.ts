import styled from "styled-components";
import { space, variant } from "styled-system";

export const Text = styled("div")(
  space,
  variant({
    prop: "size",
    variants: {
      big: {
        color: "jelly",
        fontSize: 4,
        lineHeight: "heading"
      },
      small: {
        color: "jelly",
        fontSize: 1,
        lineHeight: "body"
      }
    }
  })
);
