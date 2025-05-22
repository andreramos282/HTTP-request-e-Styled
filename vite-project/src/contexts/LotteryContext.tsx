import { createContext, useEffect, useState, ReactNode } from "react";
import { LotteryContextProps, Props } from "../types";
import { getLottery } from "../services/Lottery";

export const LotteryContext = createContext({} as LotteryContextProps);

export function LotteryProvider({ children }: { children: ReactNode }) {
  const [megasena, setMegasena] = useState<Props | undefined>();

  useEffect(() => {
    (async () => {
      try {
        const result = await getLottery();
        if ("megasena" in result) setMegasena(result.megasena);
      } catch (e) {
        alert("Erro ao buscar dados da Mega-Sena. Veja o console.");
        console.error(e);
      }
    })();
  }, []);

  return (
    <LotteryContext.Provider value={{ megasena }}>
      {children}
    </LotteryContext.Provider>
  );
}