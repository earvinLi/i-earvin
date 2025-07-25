// Internal Dependencies
import { useT } from '@/utilities/i18nUtils/i18nClientHelpers';

// Local Dependencies
import LinkBase, { LinkProps } from './LinkBase';

// Component Definition
export default function LinkClient(props: Omit<LinkProps, 'locale'>) {
  const { href = '', children, className } = props;

  const { i18n } = useT();

  return (
    <LinkBase href={href} locale={i18n.resolvedLanguage} className={className}>
      {children}
    </LinkBase>
  );
}
