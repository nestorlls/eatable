import styled from '@emotion/styled';
import { typography } from '../../styles';

const DishContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  height: 212px;
  align-items: center;
  padding: 0 18px;
  margin: 0 auto;

  svg {
    position: absolute;
    left: 2%;
    top: -30px;
    width: 20px;
    height: 20px;
    :hover {
      transform: scale(1.1);
    }
  }

  img {
    position: absolute;
    width: 241px;
    height: 241px;
    top: 0;
    border-radius: 50%;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.4);
  }

  div {
    margin-top: 270px;
    display: flex;
    flex-direction: column;
    text-align: justify;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

const Info = styled.p`
  color: ${(props) => props.color};
  margin: 4px 0;
  padding: 0 2px;

  :nth-of-type(3n + 1),
  :nth-of-type(3n + 2) {
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
  }
  :nth-of-type(3n + 3) {
    font-weight: 400;
    ${typography.text.md}
    height: 330px;
    text-align: justify;
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`;

export { DishContainer, Info, ButtonContainer };
