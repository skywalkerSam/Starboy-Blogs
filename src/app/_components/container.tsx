type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container mx-16 px-4 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-7xl">{children}</div>;
};

export default Container;
