function ImageComponent({ queryString }) {
  const [imageSrc, setImageSrc] = React.useState(null);

  React.useEffect(() => {
    let timer;

    const debounce = (func, delay) => {
      clearTimeout(timer);
      timer = setTimeout(func, delay);
    };

    const fetchImage = async () => {
      const response = await fetch(`/api?${queryString}`);
      const imageBlob = await response.blob();
      const imageUrl = URL.createObjectURL(imageBlob);
      setImageSrc(imageUrl);
    };

    debounce(() => {
      fetchImage();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [queryString]);

  return <img src={imageSrc} alt="Capsule-Render" />;
}

const App = () => {
  const [query, setQuery] = React.useState({
    type: "waving",
    height: 300,
    color: "gradient",
    text: "Input%20text",
  });

  const onChangeHandler = e => {
    const { id, value } = e.target;
    setQuery({
      ...query,
      [id]: value.replaceAll(" ", "%20").replaceAll("#", ""),
    });
  };

  const queryString = Object.keys(query)
    .filter(key => !!query[key])
    .map(key => `${key}=${query[key]}`)
    .join("&");

  const copyHandler = () => {
    window.navigator.clipboard.writeText(
      `https://capsule-render.vercel.app/api?${queryString}`,
    );
  };

  return (
    <div className="app">
      <h1>Capsule-Render Generator</h1>
      <div className="row">
        <div className="panel">
          <div className="options">
            <h2 className="group-head">Shape</h2>
            <div className="group">
              <label htmlFor="type">Type : </label>
              <select onChange={onChangeHandler} value={query.type} id="type">
                {[
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
                ].map(item => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="group">
              <label htmlFor="height">Height : </label>
              <input
                type="number"
                value={query.height}
                onChange={onChangeHandler}
                id="height"
              />
            </div>

            <div className="group">
              <label htmlFor="color">Color : </label>
              <input
                type="text"
                value={query.color}
                onChange={onChangeHandler}
                id="color"
              />
              <p className="desc">
                Check{" "}
                <a
                  href="https://github.com/kyechan99/capsule-render?tab=readme-ov-file#color"
                  target="_blank"
                >
                  #Color
                </a>{" "}
                before using this option
              </p>
              <p className="desc">
                Not supported options :{" "}
                <a
                  href="https://github.com/kyechan99/capsule-render?tab=readme-ov-file#custom-color-list"
                  target="_blank"
                >
                  #CustomColorList
                </a>
                ,{" "}
                <a
                  href="https://github.com/kyechan99/capsule-render?tab=readme-ov-file#theme"
                  target="_blank"
                >
                  #Theme
                </a>
              </p>
              <p className="desc">To use these options, enter it manually.</p>
            </div>

            <div className="group">
              <label htmlFor="type">Section : </label>
              <select
                onChange={onChangeHandler}
                value={query.section}
                id="section"
              >
                {["header", "footer"].map(item => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="group">
              <label htmlFor="type">Reversal : </label>
              <select
                onChange={onChangeHandler}
                value={query.reversal}
                id="reversal"
              >
                {["false", "true"].map(item => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <h2 className="group-head">Text</h2>

            <div className="group">
              <label htmlFor="text">Text : </label>
              <input
                type="text"
                value={query.text}
                onChange={onChangeHandler}
                id="text"
              />
              <p className="desc">
                Can't use some special characters. Like '#', '&', '/' ...
              </p>
              <p className="desc">To use a newline, enter -nl-</p>
            </div>

            <div className="group">
              <label htmlFor="textBg">Text background : </label>
              <select
                onChange={onChangeHandler}
                value={query.textBg}
                id="textBg"
              >
                {["false", "true"].map(item => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              <p className="desc">
                If you want to increase background-size, add %20 between text
                values.
              </p>
            </div>

            <div className="group">
              <label htmlFor="fontColor">Font Color : </label>
              <input
                type="esc"
                value={query.fontColor}
                onChange={onChangeHandler}
                id="fontColor"
              />
              <p className="desc">
                Value should be Hex code with erased '#'. (e.g. 00FF00)
              </p>
            </div>

            <div className="group">
              <label htmlFor="fontSize">Font Size : </label>
              <input
                type="number"
                value={query.fontSize}
                onChange={onChangeHandler}
                id="fontSize"
              />
              <p className="desc">Default value is 70</p>
            </div>

            <div className="group">
              <label htmlFor="fontAlign">Font Align X : </label>
              <input
                min="0"
                max="100"
                step="1"
                type="range"
                value={query.fontAlign || 50}
                onChange={onChangeHandler}
                id="fontAlign"
              ></input>
              {query.fontAlign || 50}
            </div>

            <div className="group">
              <label htmlFor="fontAlignY">Font Align Y : </label>
              <input
                min="0"
                max="100"
                step="1"
                type="range"
                value={query.fontAlignY || 50}
                onChange={onChangeHandler}
                id="fontAlignY"
              ></input>
              {query.fontAlignY || 50}
            </div>

            <div className="group">
              <label htmlFor="animation">Text Animation : </label>
              <select
                onChange={onChangeHandler}
                value={query.animation}
                id="animation"
              >
                {[
                  "",
                  "fadeIn",
                  "scaleIn",
                  "blink",
                  "blinking",
                  "twinkling",
                ].map(item => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="group">
              <label htmlFor="rotate">Rotate : </label>
              <input
                type="number"
                value={query.rotate}
                onChange={onChangeHandler}
                id="rotate"
              />
              <p className="desc">0 ~ 360, 0 ~ -360</p>
            </div>

            <div className="group">
              <label htmlFor="stroke">Stroke : </label>
              <input
                type="esc"
                value={query.stroke}
                onChange={onChangeHandler}
                id="stroke"
              />
              <p className="desc">
                Value should be Hex code with erased '#'. (e.g. 00FF00)
              </p>
            </div>

            <div className="group">
              <label htmlFor="strokeWidth">Stroke Width : </label>
              <input
                type="number"
                value={query.strokeWidth}
                onChange={onChangeHandler}
                id="strokeWidth"
              />
              <p className="desc">Value must be greater than or equal to 0</p>
            </div>

            <h2 className="group-head">Desc</h2>

            <div className="group">
              <label htmlFor="text">Desc : </label>
              <input
                type="esc"
                value={query.desc}
                onChange={onChangeHandler}
                id="desc"
              />
              <p className="desc">
                Can't use some special characters. Like '#', '&', '/' ...
              </p>
            </div>

            <div className="group">
              <label htmlFor="descSize">Desc Size : </label>
              <input
                type="number"
                value={query.descSize}
                onChange={onChangeHandler}
                id="descSize"
              />
              <p className="desc">Default value is 20</p>
            </div>

            <div className="group">
              <label htmlFor="descAlign">Desc Align X : </label>
              <input
                min="0"
                max="100"
                step="1"
                type="range"
                value={query.descAlign || 50}
                onChange={onChangeHandler}
                id="descAlign"
              ></input>
              {query.descAlign || 50}
            </div>

            <div className="group">
              <label htmlFor="descAlignY">Desc Align Y : </label>
              <input
                min="0"
                max="100"
                step="1"
                type="range"
                value={query.descAlignY || 60}
                onChange={onChangeHandler}
                id="descAlignY"
              ></input>
              {query.descAlignY || 60}
            </div>
          </div>
        </div>
        <div className="result">
          <ImageComponent queryString={queryString} />
          <a
            className="url"
            href={`https://capsule-render.vercel.app/api?${queryString}`}
            target="_blank"
          >
            https://capsule-render.vercel.app/api?{queryString}
          </a>

          <button className="copy-btn" onClick={copyHandler}>
            Copy
          </button>
        </div>
      </div>
      <a
        href="https://github.com/kyechan99/capsule-render"
        className="github-corner"
        aria-label="View source on GitHub"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 250 250"
          style={{
            fill: "#151513",
            color: "#FFF",
            position: "absolute",
            top: "0px",
            border: "0px",
            right: "0px",
          }}
          aria-hidden="true"
        >
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor"
            style={{
              transformOrigin: "130px 106px",
            }}
            className="octo-arm"
          ></path>
          <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor"
            className="octo-body"
          ></path>
        </svg>
      </a>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
