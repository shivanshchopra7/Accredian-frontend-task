import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ReferralModal = ({ open, handleClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
    setSubmitted(true); // Set submission status to true
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="bg-white p-6 rounded mx-auto my-20 md:w-1/3 w-3/4">
        {submitted ? (
          <div className="text-center">
            <CheckCircleIcon style={{ color: 'green', fontSize: 50 }} />
            <Typography variant="h5" className="py-4">Submitted Successfully</Typography>
            <Button className="mt-4" variant="contained" color="primary" onClick={handleClose}>Close</Button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl mb-4">Refer a Friend</h2>
            <form onSubmit={handleSubmit}>
              <TextField label="Your Name" fullWidth margin="normal" required />
              <TextField label="Your Email" type="email" fullWidth margin="normal" required />
              <TextField label="Friend's Name" fullWidth margin="normal" required />
              <TextField label="Friend's Email" type="email" fullWidth margin="normal" required />
              <div className="mt-4">
                <Button type="submit" variant="contained" color="primary">Submit</Button>
              </div>
            </form>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default ReferralModal;
