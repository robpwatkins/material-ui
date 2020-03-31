import React from 'react';
import './App.css';
import { AppBar, Fab, Box, InputBase } from '@material-ui/core/';
import { Menu, Search } from '@material-ui/icons';

class App extends React.Component {

  render() {
    return (
      <div style={{width: '100%'}} className="App">
          <AppBar color="primary">
            <Box 
              display='flex' 
              alignItems='center'
              width='75%'
              height='9vh'
              justifyContent='space-around'
              paddingLeft='15px'
              >
              <Menu />
              <h2 style={{margin: '0'}}>Title</h2>
              <div style={{display: 'flex'}}>
                <div>
                  <Search />
                </div>
                <InputBase 
                  placeholder='search . . .'
                />
              </div>
            </Box>
          </AppBar>
        {/* <Fab variant="round" color="primary">hey.</Fab> */}
      </div>
    );
  }
}

export default App;
