// Internal Dependencies
import { getT } from '@/utilities/i18nUtils/i18nServerHelpers';

// Local Dependencies
import LinkBase, { LinkProps } from './LinkBase';

// Component Definition
export default async function LinkServer(props: Omit<LinkProps, 'locale'>) {
  const { href = '', children, className } = props;

  const { i18n } = await getT();

  return (
    <LinkBase href={href} locale={i18n.resolvedLanguage} className={className}>
      {children}
    </LinkBase>
  );
}
