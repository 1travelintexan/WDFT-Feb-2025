export const PetData = ({ testPet: { name, type, owner }, pizza }) => {
  //second option is destructur after you recieve the props
  //   const { testPet } = props;
  //   const { name, type, owner } = testPet;
  return (
    <section>
      <h3>Name: {name} </h3>
      <h4>Type: {type}</h4>
      <h4>Owner: {owner}</h4>
      <h6>Favorite Pizza: {pizza}</h6>
    </section>
  );
};
