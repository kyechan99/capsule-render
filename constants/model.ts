// agonizing whether to get the name from the file name..

import animationModel from "../model/animationModel";
import normalMode from "../model/normalModel";

export const ANIMATION_MODELS = Object.keys(animationModel);
export const NORMAL_MODELS = Object.keys(normalMode);
export const MODELS = [...NORMAL_MODELS, ...ANIMATION_MODELS];
