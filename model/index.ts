import normalModels from "./normalModel";
import animationModels from "./animationModel";

const Models = {
  ...normalModels,
  ...animationModels,
};

export const getModelTypes = () => Object.keys(Models);

export default Models;
