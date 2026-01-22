import { useEffect, useState } from "react";

const Typewriter = ({ text, speed = 25 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);

    const interval = setInterval(() => {
      setIndex((i) => {
        if (i >= text.length) {
          clearInterval(interval);
          return i;
        }
        return i + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className="typewriter">
      {text.slice(0, index)}
    </p>
  );
};

export default Typewriter;
