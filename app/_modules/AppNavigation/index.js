import Link from 'next/link';

function AppNavigation() {
  return (
    <div className="w-3/4 mx-auto">
      <Link href="/">Projects</Link>
      <Link href="/posts">Posts</Link>
    </div>
  );
}

export default AppNavigation;
