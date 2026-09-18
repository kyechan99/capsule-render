import { Button, Card, CardBody } from "bmates-ui";
import { useEffect, useMemo, useState } from "react";
import { GeneratorControls } from "./components/GeneratorControls";
import { PreviewPanel } from "./components/PreviewPanel";
import {
  DEFAULT_QUERY,
  FALLBACK_ANIMATION_OPTIONS,
  FALLBACK_COLOR_PRESETS,
  FALLBACK_SHAPE_TYPES,
} from "./generator/config";
import { createPublicImageUrl, createQueryString } from "./generator/query";
import type { GeneratorQuery, QueryKey } from "./generator/types";

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

export default function App() {
  const [query, setQuery] = useState<GeneratorQuery>(DEFAULT_QUERY);
  const [copied, setCopied] = useState(false);
  const [typeOptions, setTypeOptions] =
    useState<readonly string[]>(FALLBACK_SHAPE_TYPES);
  const [animationOptions, setAnimationOptions] = useState<readonly string[]>(
    FALLBACK_ANIMATION_OPTIONS,
  );
  const [colorPresets, setColorPresets] = useState<readonly string[]>(
    FALLBACK_COLOR_PRESETS,
  );
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light",
  );
  const queryString = useMemo(() => createQueryString(query), [query]);
  const publicUrl = useMemo(
    () => createPublicImageUrl(queryString),
    [queryString],
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("capsule-render-theme", theme);
  }, [theme]);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/options", { signal: controller.signal })
      .then(response => {
        if (!response.ok) throw new Error("Unable to load generator options.");
        return response.json();
      })
      .then(
        (options: {
          types?: unknown;
          animations?: unknown;
          colorPresets?: unknown;
        }) => {
          if (
            Array.isArray(options.types) &&
            options.types.every(value => typeof value === "string")
          ) {
            setTypeOptions(options.types);
          }
          if (
            Array.isArray(options.animations) &&
            options.animations.every(value => typeof value === "string")
          ) {
            setAnimationOptions(["", ...options.animations]);
          }
          if (
            Array.isArray(options.colorPresets) &&
            options.colorPresets.every(value => typeof value === "string")
          ) {
            setColorPresets(options.colorPresets);
          }
        },
      )
      .catch((error: unknown) => {
        if (!(error instanceof DOMException && error.name === "AbortError"))
          return;
      });

    return () => controller.abort();
  }, []);

  const updateQuery = <K extends QueryKey>(
    key: K,
    value: GeneratorQuery[K],
  ) => {
    setQuery(current => ({ ...current, [key]: value }));
  };

  const copyUrl = async () => {
    await copyText(publicUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="app-shell">
      <header className="site-header">
        <a
          className="brand"
          href="https://github.com/kyechan99/capsule-render"
          target="_blank"
          rel="noreferrer"
        >
          <span>Capsule Render</span>
        </a>
        <Button
          className="theme-toggle"
          variant="ghost"
          size="icon"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          onClick={() =>
            setTheme(current => (current === "light" ? "dark" : "light"))
          }
        >
          {theme === "light" ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3v2m0 14v2M3 12h2m14 0h2m-2.6-6.4-1.4 1.4M6.4 17.6 5 19m0-14 1.4 1.4m11.2 11.2 1.4 1.4" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.5 14.1A8.5 8.5 0 0 1 9.9 3.5 8.5 8.5 0 1 0 20.5 14.1Z" />
            </svg>
          )}
        </Button>
      </header>

      <section className="page-intro" aria-labelledby="page-title">
        <div>
          <p className="eyebrow">Open-source image generator</p>
          <h1 id="page-title">Capsule Render Generator</h1>
        </div>
      </section>

      <div className="workspace">
        <Card className="controls-card">
          <CardBody>
            <GeneratorControls
              query={query}
              typeOptions={typeOptions}
              animationOptions={animationOptions}
              colorPresets={colorPresets}
              onChange={updateQuery}
              onReset={() => setQuery(DEFAULT_QUERY)}
            />
          </CardBody>
        </Card>
        <PreviewPanel
          imageUrl={`/api?${queryString}`}
          publicUrl={publicUrl}
          onCopy={() => void copyUrl()}
          copied={copied}
        />
      </div>

      <a
        className="github-corner"
        href="https://github.com/kyechan99/capsule-render"
        aria-label="View Capsule Render source on GitHub"
        target="_blank"
        rel="noreferrer"
      >
        <svg viewBox="0 0 250 250" aria-hidden="true">
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
          <path
            className="octo-arm"
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          />
          <path
            className="octo-body"
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          />
        </svg>
      </a>
    </main>
  );
}
