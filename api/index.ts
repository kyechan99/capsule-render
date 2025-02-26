import Models from "../model";
import { regexData } from "../src/verification";

export default (req: any, res: any) => {
  try {
    const type = req.query.type || "wave";
    if (!Models[regexData(type)]) {
      throw new Error("The value of 'type=' is invalid.");
    }

    const model = new Models[regexData(req.query.type)](req.query);
    const svg = model.render();
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(svg);
  } catch (err: any) {
    res.setHeader("Content-Type", "text/html");
    res.send(err.message);
  }
};
