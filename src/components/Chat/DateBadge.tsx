import dayjs from 'dayjs';

const DateBadge = ({ date }: { date: Date }) => {
  return (
    <div className="mx-auto my-2 w-fit rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-600">
      {dayjs(date).format('YYYY년 M월 D일')}
    </div>
  );
};

export default DateBadge;
