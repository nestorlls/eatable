import styled from '@emotion/styled';
import { colors, typography } from '../../../styles';

const ProfileContainer = styled.div`
  padding: 0 25px;

  h2 {
    text-align: center;
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
    color: ${colors.black};
  }
`;

const UserDataDiv = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px 14px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;

  p {
    padding: 8px;
    border-bottom: 1px solid ${colors.gray.dark};
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    :nth-of-type(1) {
      font-weight: 600;
      font-size: 18px;
      line-height: 23px;
      color: ${colors.black};
      border-bottom: none;
    }

    :nth-of-type(4) {
      border-bottom: none;
    }
  }
`;

const PageName = styled.div`
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

  a {
    text-decoration: none;
    color: ${colors.orange};
    cursor: pointer;
    :hover {
      text-decoration: underline;
      transform: scale(1.05);
    }
  }
`;

const Back = styled.div`
  position: relative;
  h2 {
    text-align: center;
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
    color: ${colors.black};
  }

  a {
    position: absolute;
    width: 40px;
    height: 40px;
    :hover {
      transform: scale(1.1);
    }
    :active {
      color: ${colors.black};
    }
  }
`;

export { UserDataDiv, PageName, ProfileContainer, Back };
