export type GeneratorQuery = {
  type: string;
  height: string;
  color: string;
  section: "header" | "footer";
  reversal: boolean;
  text: string;
  textBg: boolean;
  fontColor: string;
  fontSize: string;
  fontAlign: string;
  fontAlignY: string;
  animation: string;
  rotate: string;
  stroke: string;
  strokeWidth: string;
  desc: string;
  descSize: string;
  descAlign: string;
  descAlignY: string;
};

export type QueryKey = keyof GeneratorQuery;

export type FieldConfig = {
  key: QueryKey;
  label: string;
  type: "text" | "number" | "range" | "select";
  description?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  wide?: boolean;
  options?: readonly string[];
};
