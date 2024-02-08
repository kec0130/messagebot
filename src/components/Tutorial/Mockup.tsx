import clsx from 'clsx';

const Mockup = () => {
  return (
    <div
      className={clsx(
        'mx-auto my-6 max-w-[300px] overflow-hidden rounded-[40px] border-[10px] border-slate-200 py-4 shadow-md',
        'bg-gradient-to-b from-white from-50% to-[#B5E1FF] to-50%',
      )}
    >
      <video
        className="h-auto w-full"
        style={{
          WebkitMaskImage: '-webkit-radial-gradient(white, black)',
          WebkitBackfaceVisibility: 'hidden',
          MozBackfaceVisibility: 'hidden',
        }}
        poster="/images/tutorial-poster.jpg"
        playsInline
        autoPlay
        loop
        muted
      >
        <source src="/images/tutorial.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Mockup;
