import { useSearchParams } from "react-router-dom";

export const AboutPage = () => {
  const [theQueries] = useSearchParams();
  const firstDog = theQueries.get("dog");
  const secondDog = theQueries.get("dog2");
  console.log(
    theQueries,
    "the first dog",
    firstDog,
    "the second dog is...",
    secondDog
  );

  return (
    <div>
      AboutPage for:
      <h5>
        {firstDog} & {secondDog}
      </h5>
    </div>
  );
};
