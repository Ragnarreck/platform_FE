import styled from 'styled-components';

interface Props {
  isActive?: boolean;
  smallMargin?: boolean;
}

export const Title = styled.h1`
  font-size: 40px;
  color: ${(props: Props) => props.isActive ? '#4EB1B6' : '#FFFFFF'};
`;

export const Text  = styled.div`
  width: 50%;
  font-size: 20px;
  text-align: center;
`;

export const MarginTop = styled.div`
  margin-top: ${(props: Props) => props.smallMargin ? '20px': '40px'};
`;
