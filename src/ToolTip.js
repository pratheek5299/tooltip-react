import { useState } from 'react';
import styles from './ToolTip.module.css';
import { tipPostion, arrowStyles} from './positionStyles';

// Tool tip functional component
function ToolTip({pos}){
    // console.log('Inside ToolTip pos value', pos);

    // hover state whose value helps to determine whether to show the tool tip or no
    const [hover, setHover] = useState(false);

    // styling of the tool tip
    var displayTip =  {
        position: 'absolute',
        backgroundColor: 'black',
        padding: '3px',
        width: '14rem',
        textAlign: 'center',
        color: 'white',
        // opacity is whether to show the tool tip or not based on hover state
        opacity: hover? '1' : '0',
        borderRadius: '5px',
        transition: "all 0.3s ease-in-out",
        boxShadow: '1px 1px 15px 1px lightgray' 
    }

    // add another property to displayTip object which helps in determining the position of the tool tip
    // eg: { top: 10px }
    displayTip[pos] = tipPostion[pos]
    // console.log('display tip', displayTip)
    
    // function corresponding to event when mouse enters the button
    const handleMouseEnter = () =>{
        setHover(true);
    }
    
    // function corresponding to event when mouse leaves the button
    const handleMouseLeft = () =>{
        setHover(false)
    }

    return (
        <div className={styles.toolTipContainer}>
            <div style={displayTip}>
                Thanks of Hovering! I'm a tooltip
                <div style={arrowStyles[pos]}/>
            </div>
            <button 
            className={styles.hoverButton}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeft}
            >
                Hover For Tool Tip
            </button>
        </div>
    )
}
export default ToolTip;