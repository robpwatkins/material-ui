import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class PupsList extends React.Component {

  render() {
    return (
      <div>
        <TextField style={{padding: 24}}
          id="searchInput"
          placeholder="Search for puppers"
          margin="normal"
          onChange={this.inputChange} />
        <Grid container spacing={24} style={{padding: 24}}>
        {this.props.pups.map((pup, i) => {
          return (
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <Card>
                <CardMedia style={{height: 0, paddingTop: '56.25%'}} 
                image={pup} 
                title="puppers"
                />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    here's a pupper
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href="">
                    click a pupper
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
        </Grid>
      </div>
    )
  }
}

export default PupsList;