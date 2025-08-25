'use client';

// External Dependencies
import { Cat as CatIcon } from 'lucide-react';

// Local Dependencies
import DropdownMenu from './index';
import IconButton from '../IconButton';

// Local Variables
const menuData = [
  {
    value: 'feedMe',
    name: 'Feed me',
    onClick: () => {},
  },
  {
    value: 'playWithMe',
    name: 'Play with me',
    onClick: () => {},
  },
];

// Fixture Definition
const DropdownMenuFixture = () => (
  <DropdownMenu
    triggerElement={
      <IconButton icon={<CatIcon color='gray' />} tooltip='Meow' tooltipPosition='bottom' />
    }
    optionData={menuData}
  />
);

// Fixture Definition
export default DropdownMenuFixture;
