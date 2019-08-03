import React from 'react'
import {Paper,IconButton,InputBase, Divider} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search';


function SearchPage() {
    return (
        <div>
    <Paper >
        <IconButton  aria-label="search">
        <SearchIcon />
        </IconButton>
      <InputBase
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Divider  />
      
      
    </Paper>
        </div>
    )
}

export default SearchPage
