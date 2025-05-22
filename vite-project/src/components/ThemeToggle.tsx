import styled from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";

const FloatBtn = styled.button`
  position: fixed;
  left: 24px;
  bottom: 24px;
  z-index: 100;
  background: ${({ theme }) => theme.panel};
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px #0004;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
`;

export default function ThemeToggle({
  themeMode,
  toggleTheme
}: {
  themeMode: string;
  toggleTheme: () => void;
}) {
  return (
    <FloatBtn onClick={toggleTheme} title="Alternar tema">
      {themeMode === "light" ? <FaMoon size={22} /> : <FaSun size={22} />}
    </FloatBtn>
  );
}