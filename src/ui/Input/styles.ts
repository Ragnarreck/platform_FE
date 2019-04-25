import styled from 'styled-components';
import {
  FiXCircle as CloseIcon,
  FiCheckCircle as DoneIcon,
} from 'react-icons/fi';

interface Props {
  fullWidth?: boolean;
  topMargin?: boolean;
  isStartAdornmentExists?: boolean;
}

export const InputAdornment = styled.div`
  cursor: pointer;
  position: absolute;
  margin: 25px 0 0 10px;
 
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  background: #e6eae9;
  border: 0;
  font-size: 20px;
  border-radius: 5px;
  margin-top: ${(props: Props) => props.topMargin ? '10px' : '0'};
  padding: ${(props: Props) => props.isStartAdornmentExists ? '10px 10px 10px 40px' : '10px'};
  &:focus {
    outline: 0;
  }
`;

export const Tooltip = styled.div`
  color: #FFFFFF;
  position: absolute;
  background: black;
  padding: 10px;
  margin-top: 50px;
  z-index: 1;
  display: none;
  font-size: 17px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: ${(props: Props) => props.fullWidth ? '100%' : '50%'};
  & ${InputAdornment}:hover + ${Tooltip} {
    display: block;  
  }
`;

export const RuleWrapper = styled.div`
  display: flex;
`;

export const RuleDoneIcon = styled(DoneIcon)`
  margin-right: 10px;
  margin-bottom: 5px;
`;

export const RuleCloseIcon = styled(CloseIcon)`
  margin-right: 10px;
  margin-bottom: 5px;
`;
