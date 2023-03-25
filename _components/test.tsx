import { useCallback, useState } from "preact/hooks";

const Header = ({ title }: { title: string }) => {
  const [value, setValue] = useState(1);
  const increment = useCallback(() => setValue(v => v + 1), []);
  return (
    <>
      <h1>{title}</h1>
      <span>{value}</span>
      <button onClick={increment}>+</button>
      <p>This is my first post using lume. I hope you like it!</p>
    </>
  );
};

export default Header;
