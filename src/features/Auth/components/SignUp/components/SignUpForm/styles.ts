import styled from 'styled-components';

interface Props {
  isActive?: boolean;
}

export const Title = styled.h1`
  font-size: 40px;
  color: ${(props: Props) => props.isActive ? '#4EB1B6' : '#FFFFFF'};
`;
