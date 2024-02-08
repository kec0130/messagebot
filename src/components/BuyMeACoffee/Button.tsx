/* eslint-disable @next/next/no-img-element */

const BuyMeACoffeeButton = () => {
  return (
    <a
      href="https://www.buymeacoffee.com/chaechaecod"
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center justify-center rounded-lg border-2 border-gray-800 bg-white"
    >
      <img
        src="https://cdn.buymeacoffee.com/buttons/v2/lato-white.png"
        alt="Buy Me A Coffee"
        className="h-[46px] w-auto"
      />
    </a>
  );
};

export default BuyMeACoffeeButton;
