import { type ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="font-paprika mb-12 text-center text-3xl md:text-left md:text-4xl lg:text-5xl xl:text-6xl">
      {children}
    </h1>
  );
}
