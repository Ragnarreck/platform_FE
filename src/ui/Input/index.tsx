import React from 'react';
import { every } from 'lodash';
import {
  Tooltip,
  Wrapper,
  StyledInput,
  InputAdornment,
  RuleWrapper,
  RuleDoneIcon,
  RuleCloseIcon,
} from './styles';

type InputType = 'text' | 'password';

interface Rule {
  id: string;
  rule: boolean;
  description: string;
}

interface Props {
  value: string;
  onChange: (event: any) => void;
  fullWidth?: boolean;
  placeholder?: string;
  topMargin?: boolean;
  startAdornment?: any;
  type?: InputType;
  validationRules?: Rule[];
};

const getIconColor = (validationRules?: Rule[], value?: string) => {
  const blackIconCondition = !value || !validationRules;
  const greenIconCondition = every(validationRules, ['rule', true]);
  const redIconCondition = !greenIconCondition;
  return (blackIconCondition && '#000') || (greenIconCondition && 'green') || (redIconCondition && 'red') || '#000';
};

const renderRule = (rule: Rule) => (
  <RuleWrapper key={rule.id}>
    {rule.rule ? <RuleDoneIcon size={20} color="green" /> : <RuleCloseIcon size={20} color="red" />}
    {rule.description}
    <br />
  </RuleWrapper>
);

export const Input = ({
                        type = 'text',
                        value,
                        onChange,
                        topMargin,
                        fullWidth,
                        placeholder,
                        startAdornment,
                        validationRules,
                      }: Props) => (
  <Wrapper fullWidth={fullWidth}>
    {!!startAdornment && (
      <React.Fragment>
        <InputAdornment>
          {React.cloneElement(
            startAdornment,
            {
              color: getIconColor(validationRules, value)
            }
          )}
        </InputAdornment>
        {validationRules && (
          <Tooltip>
            {validationRules.map(renderRule)}
          </Tooltip>
        )}
      </React.Fragment>
    )}
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      topMargin={topMargin}
      fullWidth={fullWidth}
      placeholder={placeholder}
      isStartAdornmentExists={!!startAdornment}
    />
  </Wrapper>
);
