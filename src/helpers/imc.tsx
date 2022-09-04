import calculateImcProps from "../types/calculateImcProps";
import levelProps from "../types/levelsProps";

export const levels: levelProps[]  = [
  { title: 'Magreza', color: '#96a3ab', icon: 'down', imc: [0, 18.5]},
  { title: 'Normal', color: '#0ead69', icon: 'up', imc: [18.5, 24.99]},
  { title: 'Sobrepeso', color: '#e3b039', icon: 'down', imc: [25, 30]},
  { title: 'Obesidade', color: '#c3423f', icon: 'down', imc: [30.1, 99]}
];

export const calculateImc = (height: calculateImcProps["height"], weight: calculateImcProps["weight"]) => {
  const imc = weight / (height * height);
  console.log(height)
  console.log(weight)
  console.log(imc)
  for(let i in levels){
    if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]){
      let levelCopy:levelProps = {...levels[i]};

      levelCopy.yourImc = parseFloat(imc.toFixed(2));
      return levels[i]
    }
  } 
  return null;
}