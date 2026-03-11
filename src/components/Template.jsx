// 👇 CODIGO DE LA LIVE REVIEW EMPIEZA DESDE AQUÍ 👇
// Componente nuevo de la Live Review

const Template = ({ title, img }) => {
  return (
    <>
      <h1>{title}</h1>
      <img src={img} alt={title} />
    </>
  );
};

export default Template;
