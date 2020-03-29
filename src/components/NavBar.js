import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';

function Navbar () {
  return (
    <div>
      <AppBar>
        <ToolBar>
          <Typography>
            Here's some shiz
          </Typography>
        </ToolBar>
      </AppBar>
    </div>
  )
}

export default Navbar;