import {
  Alert,
  AlertDescription,
  Badge,
  Button,
  Card,
  CardBody,
  CardHead,
  CardTitle,
} from "bmates-ui";
import { useEffect, useState } from "react";
import { useDebouncedValue } from "../hooks/useDebouncedValue";

type PreviewPanelProps = {
  imageUrl: string;
  publicUrl: string;
  onCopy: () => void;
  copied: boolean;
};

export function PreviewPanel({
  imageUrl,
  publicUrl,
  onCopy,
  copied,
}: PreviewPanelProps) {
  const debouncedImageUrl = useDebouncedValue(imageUrl, 350);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );

  useEffect(() => {
    setStatus("loading");
  }, [debouncedImageUrl]);

  return (
    <Card className="preview-card">
      <CardHead className="preview-heading">
        <div>
          <p className="eyebrow">Live preview</p>
          <CardTitle>Your Capsule Render image</CardTitle>
        </div>
        <Badge
          variant={
            status === "error"
              ? "danger"
              : status === "ready"
                ? "success"
                : "secondary"
          }
        >
          {status === "error"
            ? "Unavailable"
            : status === "ready"
              ? "Ready"
              : "Updating"}
        </Badge>
      </CardHead>
      <CardBody className="preview-body">
        <div className="image-stage" aria-busy={status === "loading"}>
          {status !== "error" && (
            <img
              key={debouncedImageUrl}
              src={debouncedImageUrl}
              alt="Generated Capsule Render image"
              onLoad={() => setStatus("ready")}
              onError={() => setStatus("error")}
            />
          )}
          {status === "loading" && (
            <div className="image-loading">Rendering preview…</div>
          )}
          {status === "error" && (
            <Alert variant="warning">
              <AlertDescription>
                The local API is unavailable. Run the project with{" "}
                <code>npm start</code> to preview it.
              </AlertDescription>
            </Alert>
          )}
        </div>

        <div className="url-block">
          <span className="url-label">Image URL</span>
          <a href={publicUrl} target="_blank" rel="noreferrer">
            {publicUrl}
          </a>
        </div>
        <div className="preview-actions">
          <Button variant="primary" onClick={onCopy}>
            {copied ? (
              <svg
                className="action-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
            ) : (
              <svg
                className="action-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="9" y="9" width="11" height="11" rx="2" />
                <path d="M15 9V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4" />
              </svg>
            )}
            {copied ? "Copied!" : "Copy URL"}
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              window.open(publicUrl, "_blank", "noopener,noreferrer")
            }
          >
            Open image
            <svg className="action-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14 3h7v7" />
              <path d="M10 14 21 3" />
              <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
            </svg>
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
