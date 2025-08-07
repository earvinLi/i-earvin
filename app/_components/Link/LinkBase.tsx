// External Dependencies
import Link from 'next/link';

// Type Definitions
export type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  locale?: string;
};

// Component Definition
export default function LinkBase(props: LinkProps) {
  const { href, children, className, locale = 'en-US' } = props;

  return (
    <Link href={`/${locale}${href}`} className={className}>
      {children}
    </Link>
  );
}
