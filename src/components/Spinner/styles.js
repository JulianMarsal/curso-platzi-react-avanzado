import styled from "styled-components";
import { spin } from "../../styles/animation";

export const SpinnerBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
`;
export const LoadingIcon = styled.div`
  display: flex;
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  text-align: center;
  animation-name: spin;
  animation-duration: 2s;
  transition-timing-function: linear;
  animation-iteration-count: infinite;
  margin: auto;
  ${spin({ time: "2s" })};
`;

// If you want to add some styles latter to your text, you can do it here
export const Text = styled.span``;
