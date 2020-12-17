To extend Styled System for other CSS properties that aren't included in the library, use the `system` utility to create your own style functions.

Aliases

```js
import { system } from "styled-system";
const config = {
  color: {
    property: "color",
    scale: "colors"
  },
  backgroundColor: {
    property: "backgroundColor",
    scale: "colors"
  }
};

// alias
config.bg = config.backgroundColor;

export const color = system(config);
```

styled system built-in utility function:

```js
  const {variant ,system, compose, shadow, space, color, typegraphy, layout, flexbox, grid, background, border, position} from 'stytled-system';
```

`space` ==> margin, padding
`color` ==> color, bg
`typegraphy` ==> fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textAlign, fontStyle
`layout` ==> width, height, display, minWidth, minHeight, maxWidth, maxHeight, size, verticalAlign, overflow, overflowX, overflowY
`flexbox` ==> alignItems, alignContent, justifyItems, justifyContent, flexWrap, flexDirection, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order.
`grid` ==> gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea
`background` ==> backgroundImage, backgroundSize, backgroundPosition, backgroundRepeat
`position` ==> position, zIndex, top, right, bottom, left
`shadow` ==> textShadow, boxShadow
`border` ==> border related properties
`compose` ==> this utility is used to combine multiple style functions together into one
`system` ==> this utitlity take a config: {property:string; properties: string[]; scale:string; transform: (value, scale) => string, defaultScale: object;} to create custom props for other CSS properties.
`variant` ==> Creates a custom style utility to apply complex styles based on a single prop.

The `width` prop is transformed based on the following:

- Numbers from 0-1 are converted to percentage widths.
- Numbers greater than than 1 are converted to pixel values.
- String values are passed as raw CSS values
- if `theme.sizes` is defined, the `width` prop will attempt to pick up values from the theme
