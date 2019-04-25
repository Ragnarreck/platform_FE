import styled from 'styled-components';

export type ButtonType = 'primary' | 'secondary' | 'transparent';
export type ButtonSize = 'large' | 'middle' | 'small';

interface Props {
  buttonType: ButtonType;
  size: ButtonSize;
  topMargin?: boolean;
  disabled?: boolean;
}

const buttonStyles = {
  primary: {
    color: '#FFFFFF',
    background: '#4EB1B6',
    border: '1px solid #FFFFFF',
  },
  secondary: {
    color: '#4EB1B6',
    background: '#FFFFFF',
    border: '1px solid #4EB1B6'
  },
  transparent: {
    color: '#FFFFFF',
    background: 'transparent',
    border: '1px solid #FFFFFF'
  },
  large: {
    padding: '15px 80px',
    fontSize: '20px',
  },
  middle: {
    padding: '10px 60px',
    fontSize: '15px',
  },
  small: {
    padding: '5px 40px',
    fontSize: '15px',
  }
};


export const StyledButton = styled.button`
  color: ${(props: Props) => buttonStyles[props.buttonType].color};
  background: ${(props: Props) => buttonStyles[props.buttonType].background};
  border: ${(props: Props) => buttonStyles[props.buttonType].border};
  color: ${(props: Props) => buttonStyles[props.buttonType].color};
  opacity: ${(props: Props) => props.disabled ? 0.5 : 1};
  
  border-radius: 30px;
  -moz-border-radius: 30px;
  -webkit-border-radius: 30px;
  padding: ${(props: Props) => buttonStyles[props.size].padding};
  font-size: ${(props: Props) => buttonStyles[props.size].fontSize};
  margin-top: ${(props: Props) => props.topMargin ? '20px' : '0'};
  &:hover {
    cursor: ${(props: Props) => props.disabled ? 'no-drop': 'pointer'};
    border-width: 2px;
  }
  &:focus {
    outline:0;
  }
`;
