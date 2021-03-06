import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import List from './components/List'
import Form from './components/Form'

class App extends Component {
  darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    }
  });

  state = {
    list: []
  }

  addItem = (item) => {
    const newList = [...this.state.list, item]
    this.setState({list: newList})
  }

  doItem = (indexToDo) => {
    const newList = [...this.state.list]
    newList[indexToDo].isDone = !newList[indexToDo].isDone
    this.setState({list: newList})
  }

  deleteItem = (indexToDelete) => {
    const newList = this.state.list.filter((item, index) => index !== indexToDelete)
    this.setState({list: newList})
  }

  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={this.darkTheme}>
          <CssBaseline />
          <Box className="App" data-testid="app">
            <Helmet>
              <title>To do</title>
              <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Helmet>
            <Box display="flex">
              <Box m="auto">
                <Typography variant="h3" gutterBottom>
                  <Box fontWeight="fontWeightBold">
                    To do
                  </Box>
                </Typography>
                <List
                  list={this.state.list}
                  doItem={this.doItem}
                  deleteItem={this.deleteItem}
                />
                <Form 
                  addItem={this.addItem}
                />
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default App;
