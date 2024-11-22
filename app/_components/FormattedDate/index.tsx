// External Dependencies
import { format } from 'date-fns';

type FormattedDateProps = {
  dateString: string;
  formatter: 'postPage' | '';
};

// Component Definition
export default function FormattedDate(props: FormattedDateProps) {
  const { dateString, formatter } = props;

  const dateObject = new Date(dateString);
  const date = format(dateObject, 'd');
  const month = format(dateObject, 'MMM');
  const year = format(dateObject, 'yy');

  if (formatter === 'postPage') {
    return (
      <time dateTime={date} className="flex flex-col items-center border-t-2 border-blue-500 pt-2">
        <div className="text-2xl font-bold mb-1">{date}</div>
        <div className="text-sm text-gray-500">{`${month}, ${year}`}</div>
      </time>
    );
  }

  return <time dateTime={date}>{format(new Date(dateObject), "LLLL d, yyyy")}</time>;
}
