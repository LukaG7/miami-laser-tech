import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';
import ReCAPTCHA from 'react-google-recaptcha';

function ProductCTA() {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_8w4sjl3", "template_k9g5fja", form.current, "AsqXIP3NZtfkRQFA7")
      .then((result) => {
          alert('Message Sent!')
          window.location.reload(false)
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <Container component="section" sx={{ mt: 10, display: 'flex' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor:'#0e92d6',
              py: 8,
              px: 3,
            }}
          >
            <Box component="form" ref={form} onSubmit={sendEmail} sx={{ maxWidth: 400 }}>
              <Typography variant="h2" component="h2" gutterBottom>
                Receive offers
              </Typography>
              <Typography variant="h5">
                Message me to learn more about our product!
              </Typography> 
              <TextField
                noBorder
                placeholder="Your name"
                name="user_name"
                variant="standard"
                sx={{ width: '100%', mt: 3, mb: 2 }}
              />
              <TextField
                noBorder
                placeholder="Your email"
                name="user_email"
                variant="standard"
                sx={{ width: '100%', mt: 3, mb: 2 }}
              />
              <TextField
                noBorder
                placeholder="Message"
                name="message"
                variant="standard"
                sx={{ width: '100%', pb: '20px', mt: 4, mb: 2 }}
              />
              <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                value='Send'
                sx={{ width: '100%' }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
              background: 'url(/static/themes/onepirate/productCTAImageDots.png)',
            }}
          />
          <Box
          sx={{
            position: 'absolute',
            top: -28,
            left: -28,
            right: 0,
            bottom: 0,
            width: '90%',
            maxWidth: 900,
            // background: `url(${logo.src})`
          }}
          />

        </Grid>
      </Grid>
      <Snackbar
        open={open}
        closeFunc={handleClose}
        message="We will send you our best offers, once a week."
      />
    </Container>
  /**add email js */
  );
}

export default ProductCTA;
