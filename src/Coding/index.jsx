// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';

// Material-UI Dependencies
import { withStyles } from '@material-ui/core/styles';

// Internal Dependencies
import featuredWorkData from '../Utils/FeaturedWorkData';
import InteractiveCard from '../SharedUnits/InteractiveCard';

// Local Variables
const styles = {
  container: {
    display: 'flex',
  },
};

// Component Definition
function Coding(props) {
  const { classes } = props;

  const featuredWorkSection = featuredWorkData.map(work => (
    <InteractiveCard
      cardDescription={work.description}
      cardImage={work.image}
      cardSubheader={work.subheader}
      cardTitle={work.title}
      imageTitle={work.imageTitle}
      linkAddress={work.link}
    />
  ));

  return (
    <div className={classes.container}>
      {featuredWorkSection}
    </div>
  );
}

// Prop Validations
Coding.propTypes = {
  classes: PropTypes.shape({}),
};

Coding.defaultProps = {
  classes: {},
};

export default withStyles(styles)(Coding);
