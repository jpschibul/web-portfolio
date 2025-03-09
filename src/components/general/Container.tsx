type Props = {
  children: React.ReactElement | React.ReactNode;
};
// bg-[#bada55]
const Container = ({children}: Props) => {
  return <div className="w-[90%] m-auto md:w-[90%] ">{children}</div>;
};

export default Container;
