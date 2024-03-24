import { Box, Button, Typography, styled } from "@mui/material";

import { ShoppingCart } from "@mui/icons-material";

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3vw 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 16px;
  }
  align-items: center;
`;

const Container = styled(Box)`
  display: flex;
`;

const LoginButtons = styled(Button)`
  color: #2874f0;
  background: #fff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  font-weight: 600;
  height: 32px;

  &:hover {
    background: #f2f2f2;
  }
`;

const CustomButtons = () => {
  return (
    <Wrapper>
      <LoginButtons variant="contained">Login</LoginButtons>

      <Typography style={{ margin: 3, width: 135 }}>Become a Seller</Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Container>
    </Wrapper>
  );
};

export default CustomButtons;
