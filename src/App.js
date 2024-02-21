import styles from './App.module.css';
import {useState} from 'react';
import ToolTip from './ToolTip';

function App() {
  // position state of the toop tip
  const [pos, setPos] = useState('top');
  
  return (
    <div className={styles.toolTipAppContainer}>
      <div className={styles.toolTipContainer}>
          <select onChange={(e) => setPos(e.target.value)} className={styles.selectElement}>
            <option value='top'>Top</option>
            <option value='bottom'>Bottom</option>
            <option value='left'>Left</option>
            <option value='right'>Right</option>
          </select>
          {/* Tool Tip component */}
          <ToolTip pos={pos}/>
      </div>
    </div>
  );
}

export default App;
