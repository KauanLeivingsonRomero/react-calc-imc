import React, { useState } from "react";

import styles from './styles/App.module.css';
import poweredImage from './assets/powered.png';
import { levels, calculateImc } from "./helpers/imc";
import leftArrowImage from './assets/leftarrow.png';
import GridItem from "./components/gridItem";
import levelsProps from "./types/levelsProps";

function App() {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<levelsProps | null>(null);

  const handleCalculateButton = () => {
    if(heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    }else{
      alert("Digite todos os campos.")
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header >
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Nacional da Saúde para calcular o peso ideal de cada pessoa.</p>

          <input 
          type="number"
          placeholder="Digite a sua altura. Ex: 1.5 (em metros)" 
          value={heightField > 0 ? heightField: ""}
          onChange={ e => setHeightField(e.target.valueAsNumber)}
          disabled={toShow? true : false}
          />
          <input 
          type="number"
          placeholder="Digite a sue peso. Ex: 75.3 (em kg)" 
          value={weightField > 0 ? weightField: ""}
          onChange={ e => setWeightField(e.target.valueAsNumber)}
          disabled={toShow? true : false}
          />
          <button 
          onClick={handleCalculateButton}
          disabled={toShow? true : false}
          >
            Calcular
          </button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
            {levels.map((item, key)=>(
              <GridItem key={key} item={item}/>
            ))}
          </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
