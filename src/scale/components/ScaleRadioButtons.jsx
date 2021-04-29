import { CELSIUS, FAHRENHEIT } from '../utils/constants';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React from 'react';

const ScaleRadioButtons = ({ onChange }) => {
  return (
    <RadioGroup
      row
      aria-label="scales"
      name="scales"
      defaultValue={FAHRENHEIT}
      onChange={onChange}
    >
      <Grid item container xs={12}>
        <Grid item container xs={false} sm={2} />
        <Grid item container xs={8} sm={6}>
          <FormControlLabel
            value={CELSIUS}
            control={<Radio color="primary" />}
            label="Celsius"
            labelPlacement="end"
          />
        </Grid>
        <Grid item container xs={4} sm={2}>
          <FormControlLabel
            value={FAHRENHEIT}
            control={<Radio color="primary" />}
            label="Fahrenheit"
            labelPlacement="end"
          />
        </Grid>
        <Grid item container xs={false} sm={2} />
      </Grid>
    </RadioGroup>
  );
};

export default ScaleRadioButtons;
