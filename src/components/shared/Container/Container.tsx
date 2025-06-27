import { ContainerProps } from "./Container.types";

export const Container = (props: ContainerProps) => {
  const { children } = props;
  return (
    <div className="px-12 py-20 md:px-40 md:py-36 max-w-3-xl mx-auto">
      {children}
    </div>
  );
};
