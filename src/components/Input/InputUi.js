import styled from '@emotion/styled';
import { colors, typography } from '../../styles';

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${colors.black};
  padding: 10px 0;
  background: ${colors.gray.light};
  ${typography.text.md};

  &:focus {
    outline: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0.5px 15px rgba(0, 0, 0, 0.2);
    background-color: none;
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
