import styled from '@emotion/styled';
import { colors, typography } from '../../styles';

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${colors.black};
  padding: 5px 0;
  background: ${colors.gray.light};
  ${typography.text.md};
  &:focus {
    outline: none;
    box-shadow: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.5);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
