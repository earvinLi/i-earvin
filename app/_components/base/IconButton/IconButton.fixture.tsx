'use client';

// External Dependencies
import { Bone as BoneIcon } from 'lucide-react';

// Local Dependencies
import IconButton from './index';

// Fixture Definition
const IconButtonFixture = () => (
  <IconButton
    icon={<BoneIcon color='gray' />}
    tooltip='A delicious bone'
    tooltipPosition='bottom'
    onClick={() => {}}
    disabled={false}
  />
);

export default IconButtonFixture;
