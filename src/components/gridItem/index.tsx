import GridItemProps from '../../types/gridItemProps';
import styles from './gridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

const GridItem = (props: GridItemProps) => {
  return (
    <div className={styles.main} 
    style={{backgroundColor: props.item.color}}>
      <div className={styles.gridIcon}>
        <img src={props.item.icon === "up" ? upImage : downImage} alt="" width="30"/>
      </div>
      <div className={styles.gridTitle}>{props.item.title}</div>

      {props.item.yourImc &&
        <div className={styles.yourImc}>Seu IMC e de {props.item.yourImc} kg/m2</div>
      }

      <div className={styles.gridInfo}>
        <>
          IMC esta entre <strong>{props.item.imc[0]}</strong> e <strong>{props.item.imc[1]}</strong>
        </>
      </div>
    </div>
  );
}

export default GridItem;