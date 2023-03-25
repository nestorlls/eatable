import styled from '@emotion/styled';
import { colors, typography } from '../../../styles';

const UserDataDiv = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px 14px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
  padding: 2px;

  h3 {
    color: ${colors.black};
    font-size: ${typography.text.lg};
    font-weight: 500;
  }
`;

const Name = styled.p`
  ${typography.head.sm};
  color: ${colors.black};
  letter-spacing: 0.5px;
`;

export { UserDataDiv, TitleContainer, Name };
