import type { FieldConfig, GeneratorQuery } from "./types";

export const FALLBACK_SHAPE_TYPES = [
  "wave",
  "egg",
  "shark",
  "slice",
  "rect",
  "soft",
  "rounded",
  "cylinder",
  "waving",
  "venom",
  "speech",
  "transparent",
  "blur",
  "pulse",
  "checkered",
] as const;

export const FALLBACK_ANIMATION_OPTIONS = [
  "",
  "fadeIn",
  "scaleIn",
  "blink",
  "blinking",
  "twinkling",
] as const;
export const FALLBACK_COLOR_PRESETS = [
  "gradient",
  "auto",
  "timeAuto",
  "timeGradient",
] as const;

export const DEFAULT_QUERY: GeneratorQuery = {
  type: "waving",
  height: "300",
  color: "gradient",
  section: "header",
  reversal: false,
  text: "Input text",
  textBg: false,
  fontColor: "",
  fontSize: "70",
  fontAlign: "50",
  fontAlignY: "50",
  animation: "",
  rotate: "0",
  stroke: "",
  strokeWidth: "0",
  desc: "",
  descSize: "20",
  descAlign: "50",
  descAlignY: "60",
};

export const SHAPE_FIELDS: readonly FieldConfig[] = [
  { key: "type", label: "Type", type: "select", options: FALLBACK_SHAPE_TYPES },
  { key: "height", label: "Height", type: "number", min: 1 },
  {
    key: "color",
    label: "Color",
    type: "text",
    placeholder: "gradient, auto, or hex",
    options: FALLBACK_COLOR_PRESETS,
  },
  {
    key: "section",
    label: "Section",
    type: "select",
    options: ["header", "footer"],
  },
];

export const TEXT_FIELDS: readonly FieldConfig[] = [
  {
    key: "text",
    label: "Text",
    type: "text",
    wide: true,
  },
  {
    key: "fontColor",
    label: "Font color",
    type: "text",
    placeholder: "FFFFFF",
  },
  { key: "fontSize", label: "Font size", type: "number", min: 1 },
  {
    key: "fontAlign",
    label: "Horizontal align",
    type: "range",
    min: 0,
    max: 100,
  },
  {
    key: "fontAlignY",
    label: "Vertical align",
    type: "range",
    min: 0,
    max: 100,
  },
  {
    key: "animation",
    label: "Animation",
    type: "select",
    options: FALLBACK_ANIMATION_OPTIONS,
  },
  { key: "rotate", label: "Rotate", type: "number", min: -360, max: 360 },
  { key: "stroke", label: "Stroke color", type: "text", placeholder: "000000" },
  { key: "strokeWidth", label: "Stroke width", type: "number", min: 0 },
];

export const DESCRIPTION_FIELDS: readonly FieldConfig[] = [
  {
    key: "desc",
    label: "Description",
    type: "text",
    wide: true,
    placeholder: "Optional subtitle",
  },
  { key: "descSize", label: "Description size", type: "number", min: 1 },
  {
    key: "descAlign",
    label: "Horizontal align",
    type: "range",
    min: 0,
    max: 100,
  },
  {
    key: "descAlignY",
    label: "Vertical align",
    type: "range",
    min: 0,
    max: 100,
  },
];
