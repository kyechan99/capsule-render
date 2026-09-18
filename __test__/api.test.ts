import api from "../api";
import options from "../api/options";

const route = (query: any) => {
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

describe("Test API", () => {
  it("SVG renders correctly", () => {
    const { req, res } = route({});

    api(req, res);

    expect(res.setHeader).toBeCalledWith("Content-Type", "image/svg+xml");
    expect(res.send).toHaveBeenCalled();

    const svgContent = res.send.mock.lastCall[0];
    expect(svgContent).toContain("<svg");
  });

  it("When an error occurs, the error details are returned", () => {
    const { req, res } = route({
      type: "____",
    });

    api(req, res);

    expect(res.setHeader).toBeCalledWith("Content-Type", "text/html");
    const svgContent = res.send.mock.lastCall[0];
    expect(svgContent).toContain("The value of 'type=' is invalid.");
  });

  it("exposes generator options from the renderer registry", () => {
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    options({}, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        types: expect.arrayContaining(["wave", "waving"]),
        animations: expect.arrayContaining(["fadeIn", "twinkling"]),
        colorPresets: expect.arrayContaining(["gradient", "timeGradient"]),
      }),
    );
  });
});
