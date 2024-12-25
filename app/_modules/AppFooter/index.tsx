'use client';

// External Dependencies
import { Github as GithubIcon, Linkedin as LinkedinIcon } from 'lucide-react'; // Todo: use not deprecated icons

// Internal Dependencies
import IconButton from '@/components/IconButton';

// Component Definition
export default function AppFooter() {
  return (
    <footer className="w-[70%] my-0 mx-auto border-t-2 border-[#00A3DA] py-4 flex flex-row justify-between items-center">
      <div>
        <span className="text-xl font-bold mr-4">I Earvin</span>
        <span className="text-sm text-gray-500">&copy; 2024 Tianyang Li. All rights reserved.</span>
      </div>
      <div className="flex flex-row">
        <IconButton
          icon={<GithubIcon color='gray' size={22}/>}
          onClick={() => window.open('https://github.com/earvinLi/i-earvin', '_blank', 'noopener, noreferrer')}
        />
        <IconButton
          icon={<LinkedinIcon color='gray' size={22}/>}
          onClick={() => window.open('https://github.com/earvinLi/i-earvin', '_blank', 'noopener, noreferrer')}
        />
      </div>
    </footer>
  );
}
