/*
    Contains the css styling for the tool tips and bottom arrows.
*/
export const arrowStyles = {
    top: {
        content: " ",
        position: 'absolute',
        top: '100%',
        left: "50%",
        marginLeft: "-5px",
        borderWidth:' 5px',
        borderStyle: "solid",
        borderColor: "black transparent transparent transparent",
    },
    bottom: {
        content: " ",
        position: "absolute",
        bottom: '100%',  
        left: '50%',
        marginLeft: '-5px',
        borderWidth: '5px',
        borderStyle: 'solid',
        borderColor: 'transparent transparent black transparent',
    },
    right: {
        content: " ",
        position: 'absolute',
        top: '50%',
        right: '100%', 
        marginTop: '-5px',
        borderWidth: '5px',
        borderStyle: 'solid',
        borderColor: 'transparent black transparent transparent',
    },
    left: {
        content: " ",
        position: 'absolute',
        top: '50%',
        left: '100%', 
        marginTop: '-5px',
        borderWidth: '5px',
        borderStyle: 'solid',
        borderColor: 'transparent transparent transparent black',
    }
}
export const tipPostion = {
    top: '10px',
    left: '10px',
    right: '10px',
    bottom: '10px'
}