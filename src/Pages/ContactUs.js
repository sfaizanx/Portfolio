import React, { useRef } from 'react';
import { Box, TextField, Button, Card } from '@mui/material';
import { Email, GitHub, Instagram, LinkedIn, WifiTethering } from '@mui/icons-material';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';


const ContactForm = () => {

  const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current.email.value || !form.current.mobileNo.value || !form.current.message.value) {
      toast.warning('Please fill in all fields.');
      return;
    }

    emailjs.sendForm(
      'service_y3222pb',      
      'template_su763mz',     
      form.current,
      'DIHsSwZsmFDr11gJD'
    ).then(
      (res) => {
        toast.success('Message sent successfully!');
        form.current.reset();
      },
      (err) => {
        toast.error('Failed to send message. Please try again later.');
      }
    );
  };


  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 px-4 sm:px-6 md:px-10 py-5 justify-center items-center">
    <Box
    component="form"
      ref={form}
      Validate
      autoComplete="off"
      className='dark:text-white'
      sx={{
        width: '100%',
        maxWidth: 400,
        mx: 'auto',
        mt: 8,
        p: 4,
        borderRadius: 4,
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
        color: 'text.primary',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
        className='dark:text-white'
      >
        <TextField
        name='email'
          label="Email"
          variant="outlined"
          required
          fullWidth
          type="email"
          InputProps={{
            sx: {
              backdropFilter: 'blur(4px)',
              backgroundColor: 'rgba(255, 255, 255, 0.01)',
              borderRadius: 2,
              color: 'inherit',
            },
          }}
          InputLabelProps={{ style: { color: 'inherit' } }}
        />

        <TextField
          name='mobileNo'
          label="Mobile No."
          required
          variant="outlined"
          fullWidth
          type="number"
          inputProps={{ pattern: '[0-9]*', maxLength: 10 }}
          InputProps={{
            sx: {
              backdropFilter: 'blur(4px)',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              borderRadius: 2,
              color: 'inherit',
            },
          }}
          InputLabelProps={{ style: { color: 'inherit' } }}
        />

        <TextField
          name='message'
          label="Message"
          required
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          InputProps={{
            sx: {
              backdropFilter: 'blur(4px)',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              borderRadius: 2,
              color: 'inherit',
            },
          }}
          InputLabelProps={{ style: { color: 'inherit' } }}
        />

        <Button
          onClick={sendEmail}
          variant="contained"
          sx={{
            mt: 2,
            borderRadius: 2,
            py: 1.5,
            fontWeight: 'bold',
            bgcolor: 'primary.main',
            ':hover': { bgcolor: 'primary.dark' },
          }}
        >
          Get In Touch
        </Button>
      </Box>
    </Box>

    <Box
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 8,
        p: 4,
        borderRadius: 4,
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
        color: 'text.primary',
      }}
    >
      <h3 className='dark:text-white'>Connect With Me !</h3>
      <Box
        component="form"
        sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
        Validate
        autoComplete="off"
      >
        <Card
        className='md:text-2xl xs:text-xs dark:text-white mt-5'
          sx={{
            p: 2,
            borderRadius: 2,
            backdropFilter: 'blur(4px)',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            color: 'text.primary',
          }}>
            <WifiTethering/> &nbsp; 
            Let's Connect!
          </Card>
          <div className='grid grid-cols-2 gap-6 my-9 md:text-xl xs:text-xs dark:text-white'>
            <Card
        className='dark:text-white'
          sx={{
            p: 3,
            borderRadius: 2,
            backdropFilter: 'blur(4px)',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
          }}>
            <Email className='text-purple-400'/> &nbsp;
            <a className='text-black dark:text-white' href="mailto:sayyedfaizan1777@gmail.com"> Email </a>
          </Card>
          <Card
        className='dark:text-white'
          sx={{
            p: 3,
            borderRadius: 2,
            backdropFilter: 'blur(4px)',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            color: 'text.primary',
          }}>
            <LinkedIn className='text-blue-600'/> &nbsp;
            <a className='text-black dark:text-white' href="https://www.linkedin.com/in/faizan-sayyed-047922322" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </Card>

          <Card
        className='dark:text-white'
          sx={{
            p: 3,
            borderRadius: 2,
            backdropFilter: 'blur(4px)',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            color: 'text.primary',
          }}>
            <Instagram className='text-pink-500'/> &nbsp;
            <a className='text-black dark:text-white' href="https://www.instagram.com/fhezxn" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </Card>
          <Card
        className='dark:text-white'
          sx={{
            p: 3,
            borderRadius: 2,
            backdropFilter: 'blur(4px)',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            color: 'text.primary',
          }}>
            <GitHub className='text-black dark:text-white'/> &nbsp;
            <a className='text-black dark:text-white' href="https://github.com/sfaizanx" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Card>
          </div>
      </Box>
    </Box>
    </div>
  );
};

export default ContactForm;
