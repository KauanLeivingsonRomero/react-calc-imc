type levelProps = {
  title: string;
  color: string;
  icon: "down" | "up";
  imc: number[],
  yourImc?: number;
}

export default levelProps;