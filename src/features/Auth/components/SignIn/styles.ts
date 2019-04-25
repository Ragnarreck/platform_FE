import styled, { keyframes } from 'styled-components';

interface Props {
  isActive?: boolean;
  smallMargin?: boolean;
}

const containerOpacityAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: ${(props: Props) => props.isActive ? '60vw' : '40vw'}; 
  color: ${(props: Props) => props.isActive ? '#000000' : '#FFFFFF'};
  background: ${(props: Props) => props.isActive ? '#FFFFFF' : '#4EB1B6'};

  transition: width 1s ease-in;
  animation: ${containerOpacityAnimation} 1s ease;
`;
