import styled from '@emotion/styled';
import { colors, typography } from '../styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Eatable = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 280px;
  gap: 20px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.06);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const Paragraph = styled.p`
  font-weight: 600;
  font-size: 1rem;
  line-height: 86.84%;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${colors.orange};
`;

const Nav = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  & a {
    padding: 10px;
    width: 140px;
    text-align: center;
  }

  & a.active {
    border-bottom: 3px solid ${colors.orange};
  }
`;

const StyledLink = {
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '18px',
  lineHeight: '23px',
  color: `${colors.black}`,
};

export { Container, Eatable, Paragraph, Nav, StyledLink };
