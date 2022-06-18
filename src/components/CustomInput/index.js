import { useController } from "react-hook-form";

const CustomInput = (props) => {
  const {
    control,
    name,
    rules,
  } = props;

  const {

  } = useController({
    name,
    control,
    rules,
  })


  return (


    <div>
      <input
        type="text"
      />
    </div>
  )
}

export default CustomInput;