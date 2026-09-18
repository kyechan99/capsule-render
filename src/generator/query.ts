import type { GeneratorQuery } from "./types";

const PUBLIC_API_URL = "https://capsule-render.vercel.app/api";

export function createQueryString(query: GeneratorQuery): string {
  const params = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    if (value === "") return;
    params.set(key, String(value));
  });

  return params.toString();
}

export function createPublicImageUrl(queryString: string): string {
  return `${PUBLIC_API_URL}?${queryString}`;
}
