import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1" className={classes.InfoNoArticles}>
      Votre panier est vide <br />
      <Link to="/" className={classes.link}>
        Ajouter des articles !🤩
      </Link>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3} style={{backgroundColor: '#333', borderRadius: '10px'}}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography className={classes.total} variant="h4" >
          Total: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div className={classes.btnContainer}>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Vider le panier
          </Button>
          <Button
          component= {Link}
          to='/checkout'
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Payer
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return "Loading....";

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Votre panier
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
