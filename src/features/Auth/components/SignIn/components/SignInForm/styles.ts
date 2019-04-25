import styled from 'styled-components';

interface Props {
  isActive?: boolean;
}

export const Title = styled.h1`
  font-size: 40px;
  color: ${(props: Props) => props.isActive ? '#4EB1B6' : '#FFFFFF'};
`;

export const FormError = styled.div`
  color: red;
  margin: 5px 0;
  font-size: 15px;
`;
