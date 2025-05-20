
export type TShirtStyle = "classic" | "v-neck" | "long-sleeve";
export type TShirtColor = "white" | "black" | "blue" | "red" | "green";

export interface Position {
  x: number;
  y: number;
}

export interface DesignState {
  text: string;
  font: string;
  textColor: string;
  tshirtStyle: TShirtStyle;
  tshirtColor: TShirtColor;
  image: string | null;
  position: Position;
}
