export interface BaseModel {
  id: number;
  title: string;
  boxes: Box[];
  connections: Connections[];
}

export interface Box {
  posX: number;
  posY: number;
  width: number;
  height: number;
  fill: string;
  label: string;
}

export interface Connections {
  from: number;
  to: number;
}
