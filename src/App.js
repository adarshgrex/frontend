import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import AppRouter from './routers'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AppRouter />
        <Grid container spacing={16} >
          <Grid item xs={12}>
            <Grid container justify='center' spacing={Number(20)}>
              {[0, 1, 2, 3, 4, 5, 6, 7].map(value => (
                <Grid key={value} item>
                  <Paper style={{width: '150px', height: '200px', margin: '10px'}} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

      </div>
    )
  }
}

export default App
