// Internal Dependencies
import { useT } from '@/utilities/i18nUtils/i18nClientHelpers';

// Local Dependencies
import FormattedDateBase, { FormattedDateProps } from './FormattedDateBase';

// Component Definition
export default function FormattedDateClient(props: Omit<FormattedDateProps, 'locale'>) {
  const { dateString, formatter } = props;

  const { i18n } = useT();

  return (
    <FormattedDateBase
      dateString={dateString}
      formatter={formatter}
      locale={i18n.resolvedLanguage}
    />
  );
}
