import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from '../../components/Form/FormUI';
import { getProduct } from '../../services/products-services';
import { colors } from '../../styles';
import { IconBack } from '../Search/ui';
import { ButtonContainer, DishContainer, Info } from './ui';

const ShowDish = ({ productID }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    id: 0,
    name: '',
    category: '',
    price: 0,
    description: '',
    picture_url: '',
  });

  const { name, category, price, description, picture_url } = product;

  useEffect(() => {
    getProduct(productID)
      .then((prod) => {
        setProduct({
          ...product,
          id: prod.id,
          name: prod.name,
          price: prod.price,
          category: prod.category,
          description: prod.description,
          picture_url: prod.picture_url,
        });
      })
      .catch(console.error);
  }, []);

  return (
    <DishContainer>
      <IconBack onClick={() => navigate(-1)} />
      <img src={picture_url} alt={name} />
      <div>
        <Info color={`${colors.black}`}>{name}</Info>
        <Info color={`${colors.orange}`}>$ {price / 100}</Info>
        <Info color={`${colors.black}`}>{description}</Info>
      </div>
      <ButtonContainer style={{ marginTop: '0' }}>
        <StyledButton
          style={{
            width: '100%',
            position: 'absolute',
            marginTop: '0',
          }}
        >
          Go back
        </StyledButton>
      </ButtonContainer>
    </DishContainer>
  );
};

export default ShowDish;
