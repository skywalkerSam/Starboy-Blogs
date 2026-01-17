type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container px-4 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-6xl">{children}</div>;
};

export default Container;
