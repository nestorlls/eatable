import styled from '@emotion/styled';
import { BsSearch } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';
import { AiFillDollarCircle } from 'react-icons/ai';
import { colors, typography } from '../../styles';

const Container = styled.div`
  max-width: 768px;
  margin: auto;
  padding: 0 15px;

  p {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: ${colors.black};
    text-align: center;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconSearch = styled(BsSearch)`
  width: 20px;
  height: 20px;
  color: ${colors.black};
  opacity: 0.7;
  margin-left: 15px;
`;

const IconBack = styled(IoIosArrowBack)`
  width: 20px;
  height: 20px;
  color: ${colors.black};
  opacity: 0.7;
  cursor: pointer;
  margin: 0 10px;
`;

const StyledProduct = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  height: 212px;
  width: 156px;
  align-items: center;
  margin: 40px auto 0 auto;

  @media (max-width: 320px) {
    height: 250px;
    width: 250px;
  }
`;

const StyledImg = styled.img`
  position: absolute;
  width: 130px;
  height: 130px;
  top: -38px;
  border-radius: 50%;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
`;

const ContainerPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 5px;
  text-align: center;
  margin-left: 4px;
  margin-right: 4px;
  margin-top: 115px;

  p {
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
  }
`;

const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
`;

const InputCont = styled.div`
  position: relative;
`;

const InputMinMax = styled.input`
  box-sizing: border-box;
  padding: 8px 8px 8px 37px;
  width: 110px;
  border-radius: 8px;
  border: 1px solid ${colors.orange};
  &:focus {
    outline: none;
    border: 1px solid ${colors.orange};
    box-shadow: 0px 1px 6px ${colors.orange};
  }

  &::placeholder {
    color: ${colors.gray.dark};
  }
`;

const IconDollar = styled(AiFillDollarCircle)`
  color: ${colors.gray.dark};
  position: absolute;
  width: 20px;
  height: 20px;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
`;

const Result = styled.p`
  margin: 50px 0;
`

export {
  Container,
  InputContainer,
  IconSearch,
  IconBack,
  StyledProduct,
  StyledImg,
  ContainerPrice,
  ContainerInput,
  InputCont,
  InputMinMax,
  IconDollar,
  Result,
};
