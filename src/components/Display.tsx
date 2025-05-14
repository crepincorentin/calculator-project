type Props = {
  value: string;
};

export const Display = ({ value }: Props) => (
  <div className="text-white text-right text-5xl py-6 px-4 font-semibold w-full">
    {value}
  </div>
);
