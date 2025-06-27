import { TitleProps } from "./Title.types";

export const Title = (props: TitleProps) => {
  const { title, subtitle } = props;
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-gray-400">{title}</h2>
      <h3 className="text-3xl">{subtitle}</h3>
    </div>
  );
};
