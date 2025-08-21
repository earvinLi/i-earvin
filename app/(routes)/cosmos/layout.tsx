// External Dependencies
import type { Metadata } from 'next';

// Local Dependencies
import './global.css';

export const metadata: Metadata = {
  title: 'Cosmos Panel',
  description: 'Panel for React Cosmos',
};

// Type Definitions
type CosmosLayoutProps = {
  children: React.ReactNode;
};

// Layout Definition
export default function CosmosLayout(props: CosmosLayoutProps) {
  const { children } = props;

  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
