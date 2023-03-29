import styled from '@emotion/styled';
import { colors, typography } from '../../styles';

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${colors.black};
  padding: 5px 0;
  background: transparent;
  ${typography.text.md};
  
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${colors.gray.dark};
  }
`;

const StyledLabel = styled.label`
  ${typography.text.sm};
  color: ${colors.gray.dark};
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 8px;
`;

export { StyledInput, StyledLabel, InputContainer };
