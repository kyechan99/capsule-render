import { getModelTypes } from "../model";
import { COLOR_PRESET_VALUES } from "../model/capabilities";
import { ANIMATION_NAMES } from "../utils/render";

export default (_req: any, res: any) => {
  res.status(200).json({
    types: getModelTypes(),
    animations: ANIMATION_NAMES,
    colorPresets: COLOR_PRESET_VALUES,
  });
};
