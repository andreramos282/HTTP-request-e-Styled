import { useContext } from "react";
import styled from "styled-components";
import { LotteryContext } from "../contexts/LotteryContext";
import Ball from "../components/Ball";

const CenteredPanel = styled.div`
  background: ${({ theme }) => theme.panel};
  padding: 40px 32px;
  border-radius: 16px;
  box-shadow: 0 2px 24px #0002;
  min-width: 340px;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DezRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0 18px 0;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  margin: 0 0 10px 0;
  font-weight: bold;
  letter-spacing: 1px;
`;

const Info = styled.div`
  font-size: 1.07rem;
  color: ${({ theme }) => theme.secondary};
`;

const MainWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Megasena() {
  const { megasena } = useContext(LotteryContext);

  return (
    <MainWrapper>
      <CenteredPanel>
        <Title>MEGA-SENA</Title>
        {!megasena ? (
          <Info>Carregando...</Info>
        ) : (
          <>
            <DezRow>
              {megasena.dezenas.map((d, i) => (
                <Ball value={d} key={i} />
              ))}
            </DezRow>
            <Info>{megasena.dataPorExtenso}</Info>
          </>
        )}
      </CenteredPanel>
    </MainWrapper>
  );
}