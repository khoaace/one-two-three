import React from 'react';
import logo from './logo.svg';
import './App.css';
import useGame from './App.controller';
import ItemGame from './ItemGame';

function App() {

  let {
    playerChoice,
    setPlayerChoice,
    result,
    setResult,
    score,
    choices,
    computerChoice,
    handleChoice
  } = useGame();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        Oẳn tù tì
      </h1>
      <p>
        Số điểm: <strong style={{ fontSize: '30px', color: 'red' }} className="animated zoomIn">{Number(score)}</strong>
      </p>
      <p>
        Kêt quả:
        <strong>
          {result === 1 && <h2 className="animated zoomIn">Thắng</h2>}
          {result === 0 && <h2 className="animated zoomIn">Hoà</h2>}
          {result === -1 && <h2 className="animated zoomIn">Thua</h2>}
        </strong>
      </p>
      <h3>Lượt chơi</h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {choices.map((item, index) => (
          <div key={index} onClick={() => {
            handleChoice(item);
          }}>
            <ItemGame choice={item} />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h3>Bạn chọn: </h3>
          <div>
            {playerChoice && <ItemGame choice={playerChoice} />}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h3>Máy tính chọn: </h3>
          {computerChoice && <ItemGame choice={computerChoice} />}
        </div>
      </div>


    </div>
  );
}

export default App;
