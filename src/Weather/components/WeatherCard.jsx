import * as convertions from '../../scale/utils/convertions';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import OpacityIcon from '@material-ui/icons/Opacity';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: '10px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    paddingTop: '46.25%',
  },
});

const WeatherCard = ({ info }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`}
      />
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {info.weather[0].main} ({info.weather[0].description})
        </Typography>
        <Typography variant="h3" component="h5" align="center">
          {convertions.toFahrenheit(info.main.temp)}
          <sup>&#8457;</sup>
        </Typography>
        <Typography className={classes.pos} color="textSecondary"></Typography>
        <Typography variant="body2" component="p" align="right">
          {convertions.toFahrenheit(info.main.temp_min)}
          <sup>&#8457;</sup> / {convertions.toFahrenheit(info.main.temp_max)}
          <sup>&#8457;</sup>
          <br />
          Feels like {convertions.toFahrenheit(info.main.feels_like)}
          <sup>&#8457;</sup>
          <br />
          <span style={{ paddingLeft: 5 }}>Wind {info.wind.speed} m/s</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <OpacityIcon /> {info.main.humidity}%
        </Button>
        <Button size="small">{info.dt_txt}</Button>
      </CardActions>
    </Card>
  );
};

export default WeatherCard;
