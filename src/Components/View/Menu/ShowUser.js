import IconButton from "../share/IconButton";

const ShowUser = (props) => {
  return (
    <>
      Este es el usuario
      <IconButton
        img={"/Media/Ico/cancel.svg"}
        title={"Cancelar"}
        handleButton={() => props.setShowWindow("M")}
        size={"sm"}
      />
    </>
  );
};

export default ShowUser;
