// External Dependencies
import { format } from 'date-fns';
import { enUS, zhCN, ja } from 'date-fns/locale';

// Type Definitions
export type FormattedDateProps = {
  dateString: string;
  formatter?: 'postPage' | 'default';
  locale?: string;
};

// Local Variables
// Todo: find better solution to localize time data
const getLocaleTimeData = (timeLocale: string) => {
  const localeTimeData = {
    'en-US': { timeLocale: enUS, timeFormat: 'LLLL d, yyyy' },
    'zh-CN': { timeLocale: zhCN, timeFormat: "yyyy'年'LLLLd'日'" },
    'ja-JP': { timeLocale: ja, timeFormat: "yyyy'年'LLLLd'日'" },
  };

  return localeTimeData[timeLocale as keyof typeof localeTimeData];
};

// Component Definition
export default function FormattedDateBase(props: FormattedDateProps) {
  const { dateString, formatter = 'default', locale = 'en-US' } = props;

  const dateObject = new Date(dateString);
  const { timeLocale, timeFormat } = getLocaleTimeData(locale);

  if (formatter === 'postPage') {
    const date = format(dateObject, 'd', { locale: timeLocale });
    const month = format(dateObject, 'MMM', { locale: timeLocale });
    const year = format(dateObject, 'yy', { locale: timeLocale });

    return (
      <time
        dateTime={dateString}
        className='flex flex-col items-center border-t-2 border-blue-500 pt-2'
      >
        <div className='mb-1 text-2xl font-bold'>{date}</div>
        <div className='text-sm text-gray-500'>{`${month}, ${year}`}</div>
      </time>
    );
  }

  return (
    <time dateTime={dateString}>
      {format(new Date(dateObject), timeFormat, { locale: timeLocale })}
    </time>
  );
}
