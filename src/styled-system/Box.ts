import styled from "styled-components";
import { space, color, layout, compose } from "styled-system";

/**
 * space functions add margin & padding props
 * m => margin, mt => margin-top .. so on
 * mx => margin-left and margin-right
 * my => margin-top and margin-bottom
 *
 * p => padding, pt => padding-top .. so on
 * px => padding-left and padding-right
 * py => padding-top and padding-bottom
 */

export const Box = styled.div`
  ${compose(space, color, layout)}
`;
