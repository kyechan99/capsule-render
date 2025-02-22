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

describe("Test Text and Desc", () => {
  it("Text", () => {
    const { req, res } = route({
      type: "waving",
      text: "_TEST_TEXT_",
      fontSize: 40,
      fontAlign: 30,
      fontAlignY: 20,
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
    expect($texts[0].firstChild.data).toBe("_TEST_TEXT_");
  });

  it("Desc", () => {
    const { req, res } = route({
      type: "venom",
      desc: "_DESC_TEST_",
      descSize: 40,
      descAlign: 30,
      descAlignY: 90,
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
    expect($texts[0].firstChild.data).toBe("_DESC_TEST_");
  });
});
