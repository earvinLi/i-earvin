// Internal Dependencies
import { getT } from '@/utilities/i18nUtils/i18nServerHelpers';

// Local Dependencies
import FormattedDateBase, { FormattedDateProps } from './FormattedDateBase';

// Component Definition
export default async function FormattedDateServer(props: Omit<FormattedDateProps, 'locale'>) {
  const { dateString, formatter } = props;

  const { i18n } = await getT();

  return (
    <FormattedDateBase
      dateString={dateString}
      formatter={formatter}
      locale={i18n.resolvedLanguage}
    />
  );
}
