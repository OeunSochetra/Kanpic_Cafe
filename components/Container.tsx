import { ReactNode } from "react";

type FooProps = {
  children: ReactNode;
};

const Container = ({ children }: FooProps) => {
  return (
    <div
      className={`mx-auto mt-4 mb-[0px] w-full max-w-[1630px] flex-1 px-4  md:mt-6 lg:mt-8 lg:px-8 xl:max-w-[1180px] xl:px-0  2sm:px-[unset] 4xl:max-w-[1730px] `}
    >
      {children}
    </div>
  );
};

export default Container;
