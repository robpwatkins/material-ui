import React from 'react';
import CoffeeCard from './CoffeeCard';
import { Grid } from '@material-ui/core';

const Content = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={4}>
        <CoffeeCard 
          title="Boopy Pup" 
          subtitle="$2.99" 
          avatarSrc='https://i.redd.it/keszh72c3io01.jpg' 
          imgSrc='https://i.redd.it/keszh72c3io01.jpg'
          description='A tiny lil boop.'
           />
      </Grid>
    </Grid>
  )
};

export default Content;