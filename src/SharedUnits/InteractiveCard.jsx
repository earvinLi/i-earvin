// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';

// Material-UI Dependencies
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Local Variables
const styles = {
  actions: {
    display: 'flex',
  },
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
};

// Component Definition
function InteractiveCard(props) {
  const {
    cardDescription,
    cardImage,
    cardSubheader,
    cardTitle,
    classes,
    imageTitle,
    linkAddress,
  } = props;

  return (
    <Card className={classes.card}>
      <CardHeader
        subheader={cardSubheader}
        title={cardTitle}
      />
      <CardMedia
        className={classes.media}
        image={cardImage}
        title={imageTitle}
      />
      <CardContent>
        <Typography component="p">
          {cardDescription}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions} disableActionSpacing>
        <IconButton
          aria-label="Link"
          href={linkAddress}
          target="_blank"
        >
          <LinkIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

// Prop Validations
InteractiveCard.propTypes = {
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardSubheader: PropTypes.string,
  cardTitle: PropTypes.string.isRequired,
  classes: PropTypes.shape({}).isRequired,
  imageTitle: PropTypes.string,
  linkAddress: PropTypes.string.isRequired,
};

InteractiveCard.defaultProps = {
  cardSubheader: '',
  imageTitle: '',
};

export default withStyles(styles)(InteractiveCard);
