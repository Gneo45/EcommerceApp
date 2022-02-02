import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';

import { AddShoppingCart} from '@material-ui/icons'

import useStyles from './styles'
import product from '../../Products/Product/Product'

const Product = ({ product, onAddToCart }) => {
const classes = useStyles();

/* console.log(product);
return <div>{product.name} <img src={product.image.url} alt="img"></img> </div> */

  return (
      <Card className={classes.root}>
          <CardMedia className={classes.media} image={product.image.url} title={product.name} />
          <CardContent>
              <div className={classes.cardContent}>
                    <Typography variant="h6" gutterBottom className={classes.articleName}>
                        {product.name}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        {product.price.formatted_with_symbol}
                    </Typography>
              </div>
              <Typography className={classes.typoDescription} dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="primary"/>
          </CardContent>
          <CardActions disableSpacing className={classes.cardActions}>
              <IconButton className={classes.cartIcon} aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                  <AddShoppingCart />
              </IconButton>
          </CardActions>

      </Card>
  )  
}

export default Product;
