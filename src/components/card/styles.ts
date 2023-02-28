import styled, { css } from "styled-components";
import { StyleProps } from "./cardProps.types";

export const Container = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 130px;
  width: 250px;
  border-radius: 16px;
  margin-bottom: 20px;
  padding: 10px;
  box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.1);
  cursor: ${(props) => (props.isNew ? "normal" : "grab")};
  background-color: rgb(40, 44, 51);
  ${(props) =>
    props.isDragging &&
    css`
      border: 2px dashed rgb(166, 247, 80);
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
  padding: 0 15px;
  margin-bottom: 5px;
`;

export const Title = styled.h2`
  color: rgb(255, 251, 240);
  font-family: "Lato", sans-serif;
  font-size: 16px;
  font-weight: 400;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:first-letter {
    text-transform: capitalize;
  }
`;

export const Description = styled.p`
  padding: 0 15px;
  font-family: "Fira Code", monospace;
  font-size: 12px;
  color: rgb(166, 247, 80);
  font-weight: 400;
  display: block;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ContainButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  > button {
    margin-right: 5px;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const FormChangeTask = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  flex-direction: column;
  > button {
    width: 50%;
    background: none;
    border: none;
  }
  > input,
  textarea {
    outline: none;
    width: 100%;
    border: none;
    padding: 5px;
    border-radius: 8px;
    background: rgba(255, 251, 240, 0.05);
    color: rgb(255, 251, 240);
  }
`;
