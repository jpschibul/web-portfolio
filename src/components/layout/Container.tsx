type Props = {
  children: React.ReactElement | React.ReactNode;
};
// bg-[#bada55]
const Container = ({children}: Props) => {
  return <div className="m-auto w-[90%] md:w-[90%]">{children}</div>;
};

export default Container;
