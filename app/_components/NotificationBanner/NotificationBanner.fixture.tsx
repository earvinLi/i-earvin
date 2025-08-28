// External Dependencies
import { CircleAlert as CircleAlertIcon } from 'lucide-react';

import NotificationBanner from './index';

export default (
  <NotificationBanner>
    <CircleAlertIcon color='white' size={21} className='mr-2' />
    <div className='text-white'>A banner</div>
  </NotificationBanner>
);
