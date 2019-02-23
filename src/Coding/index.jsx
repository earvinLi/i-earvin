// External Dependencies
import React from 'react';

// Internal Dependencies
import InteractiveCard from '../SharedUnits/InteractiveCard';

// Component Definition
function Coding() {
  const featuredWorkSection = [
    {
      description: 'Use KnockOut to make the most of Google Map API and MediaWiki API.',
      image: 'https://s3.amazonaws.com/i-earvin/img/neighborhood-map.jpeg',
      subheader: 'November 27, 2017',
      title: 'Neighborhood Map',
      imageTitle: 'Photo by rawpixel on Unsplash',
      link: 'http://tianyangl.com/projects/fn/neighborhood-map/index.html',
    },
  ].map(work => (
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
    <div>
      {featuredWorkSection}
    </div>
  );
}

export default Coding;
