
const Square = ({value, onClick}) => {
    // console.log(value);
    return (
        <button className="square" onClick={onClick} style={{height: '100px', width: '100px'}}>
            {value}
        </button>
    )
}

export default Square;