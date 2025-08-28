// Type Definitions
type NotificationBannerProps = {
  children: React.ReactNode;
};

// Component Definition
function NotificationBanner(props: NotificationBannerProps) {
  const { children } = props;

  return (
    <div className='flex h-9 w-screen flex-row items-center rounded-xs bg-[#03A9F4] px-6'>
      {children}
    </div>
  );
}

export default NotificationBanner;
