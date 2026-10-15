import { useEffect } from "react";

const SITE_NAME = "Flobyte";

/**
 * Sets document title and meta description for the current route.
 * In this SPA, metadata is applied client-side.
 */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title === SITE_NAME ? title : `${title} · ${SITE_NAME}`;

    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;

    const setOg = (property: string, content: string) => {
      let tag = document.querySelector<HTMLMetaElement>(
        `meta[property="${property}"]`
      );
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };
    setOg("og:title", title === SITE_NAME ? title : `${title} · ${SITE_NAME}`);
    setOg("og:description", description);
    setOg("og:type", "website");
    setOg("og:site_name", SITE_NAME);
  }, [title, description]);
}
