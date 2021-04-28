import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import React from 'react';

const AlertDialog = ({ title, message, onClose }) => {
  return (
    <Alert severity="error" onClose={onClose}>
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  );
};

export default AlertDialog;
