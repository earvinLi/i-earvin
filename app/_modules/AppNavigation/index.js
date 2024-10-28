import Link from 'next/link';

function AppNavigation() {
  return (
    <div className="w-3/4 mx-auto">
      <Link href="/">Project</Link>
      <Link href="/blog">Blog</Link>
    </div>
  );
}

export default AppNavigation;
