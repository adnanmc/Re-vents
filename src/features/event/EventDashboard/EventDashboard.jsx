import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

class EventDashboard extends Component {
  render() {
    return (
      <Grid>
          <Grid.column width={10}>
            <h2>Left column</h2>
          </Grid.column>
          <Grid.column width={6}>
            <h2>Right column</h2>
          </Grid.column>
      </Grid>
    )
  }
}

export default EventDashboard;