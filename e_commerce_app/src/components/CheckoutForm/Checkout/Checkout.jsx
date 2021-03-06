import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
  CssBaseline
  
} from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";

import { commerce } from "../../../lib/commerce";
import useStyles from "./styles";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";

const steps = ["Adresse de livraison", "details de paiement"];

const Checkout = ({ cart,order,onCaptureCheckout,error }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });

        console.log(token);

        setCheckoutToken(token);
      } catch (error) {
        navigate.pushState('/')
      }
    };

    generateToken();
  }, [cart, navigate]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data) => {
    setShippingData(data);

    nextStep();
  };

  const timeout = (data) => {
      setTimeout(() => {
          console.log(data);
          setIsFinished(true)
      }, 3000);
  }
  let Confirmation = () => order.customer ? (
  
  <>
  <div>
      <Typography variant="h5">Merci pour votre achat ! {order.customer.firstname} {order.customer.lastname}</Typography>
      <Divider className={classes.divider} />
      <Typography variant="subtitle2">Order ref:{order.customer_reference}</Typography>
  </div>
  <br />
  <Button component={Link} to="/" variant="outlined" type="button">Back toHome</Button>
  </>
  
    ) : isFinished ? (
        <>
        <div>
            <Typography variant="h5">Merci pour votre achat ! </Typography>
            <Divider className={classes.divider} />
            
        </div>
        <br />
        <Button component={Link} to="/" variant="outlined" type="button">Back toHome</Button>
        </>

    ) : (
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
    );

    if(error){
        <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Button component={Link} to="/" variant="outlined" type="button">Back toHome</Button>
        </>
    }

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} nextStep={nextStep} setShippingData={setShippingData}/>
    ) : (
      <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} onCaptureCheckout={onCaptureCheckout} timeout={timeout}/>
    );

  return (
    <>
    <CssBaseline />
      <div className={mergeClasses.toolbar} />

      <main className={mergeClasses.layout} >
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Valider votre commande
          </Typography>
          <Stepper activeStep={0} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
