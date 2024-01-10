import api from "../api";
import { DOMParser } from "xmldom";

const route = query => {
  const req = {
    query: {
      type: "wave",
      ...query,
    },
  };
  const res = {
    setHeader: jest.fn(),
    send: jest.fn(),
  };

  return { req, res };
};

const modelList = [
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
  "transparent",
];

describe("Test Models", () => {
  beforeEach(() => {
    jest.spyOn(Math, "random").mockReturnValue(0.5);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  modelList.map(type => {
    it(`${type} model`, () => {
      const { req, res } = route({
        type,
        color: "gradient",
        height: 300,
        text: type,
        desc: type,
        fontSize: 20,
        fontAlign: 30,
        fontAlign: 40,
        descSize: 30,
        descAlign: 40,
        descAlignY: 50,
        rotate: 1,
        reversal: "true",

        textBg: "true",
        animation: "twinkling",
        customColorList: "",
        theme: "none",
      });
      api(req, res);

      expect(res.setHeader).toBeCalledWith("Content-Type", "image/svg+xml");
      expect(res.send).toHaveBeenCalled();

      const svgContent = res.send.mock.lastCall[0];
      const parser = new DOMParser();
      const svgDocument = parser.parseFromString(svgContent, "image/svg+xml");

      const $svg = svgDocument.documentElement;
      expect($svg.tagName).toBe("svg");

      const $texts = svgDocument.getElementsByTagName("text");
      expect($texts.length).toBeTruthy();

      const $styles = svgDocument.getElementsByTagName("style");
      expect($styles.length).toBeTruthy();
    });
  });

  modelList.map(type => {
    it(`${type} model`, () => {
      // This is a safe query that will not be modified with a high probability.
      const { req, res } = route({
        type,
        color: "gradient",
        height: 300,
        text: type,
        desc: type,
        fontSize: 20,
        fontAlign: 30,
        fontAlign: 40,
        descSize: 30,
        descAlign: 40,
        descAlignY: 50,
        rotate: 1,
        reversal: "true",
      });
      api(req, res);

      expect(res.setHeader).toBeCalledWith("Content-Type", "image/svg+xml");
      expect(res.send).toHaveBeenCalled();

      const svgContent = res.send.mock.lastCall[0];
      const parser = new DOMParser();
      const svgDocument = parser.parseFromString(svgContent, "image/svg+xml");

      const $svg = svgDocument.documentElement;
      expect($svg).toMatchSnapshot();
    });
  });
});
