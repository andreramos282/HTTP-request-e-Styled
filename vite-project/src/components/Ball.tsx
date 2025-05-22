import styled from "styled-components";

const BallStyled = styled.div`
  width: 48px;
  height: 48px;
  background: #209869;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0 8px;
`;

export default function Ball({ value }: { value: string }) {
  return <BallStyled>{value}</BallStyled>;
}