export interface BaseModel {
  id: number;
  title: string;
  boxes: Box[];
  connections: Connections[];
}

export interface Box extends BaseModel {
  posX: number;
  posY: number;
  width: number;
  height: number;
  fill: string;
  label: string;
}

export interface Connections extends BaseModel {
  from: number;
  to: number;
}
