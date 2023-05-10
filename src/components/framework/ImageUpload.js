import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadProfilePic } from '../../store';
import { Button, Container, Typography, makeStyles } from '@material-ui/core';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'Mukta, sans-serif',
    marginTop: 50,
  },
  fields: {
    marginBottom: 20,
    display: 'inline-block',
    width: '50%',
  },
  button: {
    fontSize: 14,
    width: '50%',
    height: '60px',
    backgroundColor: 'rgb(12, 0, 77)',
    '&:hover': {
      backgroundColor: 'rgb(79, 24, 141)',
    },
  },
});

const ImageUpload = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [file, setFile] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    console.log('this is the file name', file.name);
    data.append('file', file);
    dispatch(createImage(data));
    console.log('sent');
    dispatch(uploadProfilePic({ id: team.id, profilePic: file }));
  };

  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h5"
        component="h1"
        gutterBottom
      >
        Upload a profile pic
      </Typography>
      {/* <Grid container spacing={3}> */}
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          type="file"
          className={classes.fields}
          margin="normal"
          variant="outlined"
          color="primary"
          onChange={e => {
            const file = e.target.files[0];
            setFile(file);
            console.log(file);
          }}
        ></TextField>

        <Button
          className={classes.button}
          onClick={() => console.log('button clicked!')}
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<SendRoundedIcon />}
        >
          Upload
        </Button>
      </form>
    </Container>
  );
};

export default ImageUpload;
