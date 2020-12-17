import styled from "styled-components";
import { variant } from "styled-system";

export const Button = styled("button")(
  {
    appearance: "none",
    fontFamily: "inherit"
  },
  variant({
    scale: "buttons",
    variants: {
      primary: {
        color: "green"
      },
      secondary: {
        color: "greend"
      }
    }
  })
);

const getColor = (props: any) => `color: ${props.color}`;
export const ButtonDynamic = styled.div`
  ${getColor}
`;

console.log(ButtonDynamic, Button);
