const DateBadge = () => {
  const convertDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <div className="mx-auto my-2 w-fit rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-600">
      {convertDate(new Date())}
    </div>
  );
};

export default DateBadge;
