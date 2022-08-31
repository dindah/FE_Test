
import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import TableRuas from './table';
import { GetDataRuas } from '../api'

// ----------------------------------------------------------------------


export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this._getDataRuas = this._getDataRuas.bind(this);
  }

  componentDidMount () {
   this._getDataRuas()
  }

  _getDataRuas = async () => {
    const response = await GetDataRuas()
    this.setState({
      listRuas: response.data
    })
  } 

  render () {
    console.log(this.state.listRuas|| [])
    
    return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
          <Grid>
          <Grid item xs={12} md={6} lg={12}>
            <TableRuas data={this.state.listRuas || []}/>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}}