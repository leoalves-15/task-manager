import styled, { css } from "styled-components";
import { StyleProps } from "./cardProps.types";

export const Container = styled.div<StyleProps>`
  position: relative;
  height: 130px;
  width: 280px;
  border-radius: 16px;
  padding: 10px;
  box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.1);
  cursor: ${(props) => (props.isNew ? "normal" : "grab")};
  background: blue;
  ${(props) =>
    props.isDragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      background: transparent;
      box-shadow: none;
      cursor: grabbing;
      * {
        opacity: 0;
      }
    `}
`;

export const TitleContain = styled.div`
  border-radius: 16px;
  width: min-content;
  padding: 0 15px;
  background-color: #eaf2ff;
`;

export const Title = styled.h2`
  background-color: #eaf2ff;
`;

export const Description = styled.p``;
