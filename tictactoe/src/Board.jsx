import Square from './Square';

const Board = ({squares, onClick}) => {
    const renderSquare = (i) => (
        <Square value={squares[i]} onClick={() => onClick(i)}/>
    );

    return (
        <div style={{border: '1px solid darkblue'}}>
            This is Board
            <div>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board;