import './styles.css';
import { useEffect, useState, ChangeEvent } from 'react';
import { BaseModel, Box, Connections } from '../DataModel';
import { BoxView } from '../BoxView';
import { ConnectionView } from '../ConnectionView';

export const App = (): JSX.Element => {
  const [toBox, setBox] = useState<BaseModel[]>([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    const fetchDataFood = async (): Promise<BaseModel[]> => {
      const response = await fetch('#');
      const json = await response.json();
      const data = json.result as BaseModel[];
      setBox(data);
      return data;
    };

    fetchDataFood();
  }, []);

  const middleOfBox = (box: Box): { x: number; y: number } => {
    const x = box.posX + box.width / 2;
    const y = box.posY + box.height / 2;
    return { x, y };
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="layout">
        <header className="header">
          <h1>{toBox.length > 0 && toBox[0].title}</h1>
          <div className="label-field">
            <label htmlFor="box-label">Label:</label>
            <input
              type="text"
              id="box-label"
              value={value}
              onChange={handleChange}
            />
          </div>
        </header>

        <svg className="board">
          {toBox.map((baseModel: BaseModel) => {
            return baseModel.connections.map((connections: Connections) => {
              let start = middleOfBox(baseModel.boxes[connections.from]);
              let end = middleOfBox(baseModel.boxes[connections.to]);
              return (
                <ConnectionView
                  startX={start.x}
                  startY={start.y}
                  endX={end.x}
                  endY={end.y}
                />
              );
            });
          })}

          {toBox.map((baseModel: BaseModel) => {
            return baseModel.boxes.map((box: Box) => {
              return (
                <BoxView
                  key={box.id}
                  posX={box.posX}
                  posY={box.posY}
                  width={box.width}
                  height={box.height}
                  fill={box.fill}
                  label={box.label}
                />
              );
            });
          })}
        </svg>
      </div>
    </>
  );
};
