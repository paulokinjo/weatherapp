import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import OpacityIcon from '@material-ui/icons/Opacity';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { getScale } from '../../scale/utils/convertions';
import weatherCardStyles from './styles/weatherCard.styles';

const WeatherCard = ({ info, scale, onCardSelection }) => {
  const classes = weatherCardStyles();

  return (
    <Card
      className={classes.root}
      onClick={onCardSelection}
      style={
        info.isSelected
          ? {
              border: '2px solid rgb(86, 180, 239)',
              boxShadow:
                '0px 1px 3px rgba(0, 0, 0, 0.05) inset, 0px 0px 8px rgba(82, 168, 236, 0.6)',
            }
          : {}
      }
    >
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
          {getScale(info.main.temp, scale)}
          <hr />
        </Typography>
        <Typography variant="body2" align="center" color="secondary">
          Feels like: {getScale(info.main.feels_like, scale)}
          <br />
          <span>Wind {info.wind.speed} m/s</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <OpacityIcon color="primary" /> {info.main.humidity}%
        </Button>
        <Button size="large" style={{ flex: 1 }}>
          {new Date(info.dt_txt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </Button>
      </CardActions>
    </Card>
  );
};

export default WeatherCard;
