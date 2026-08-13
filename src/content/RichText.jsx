import React from "react";

/**
 * A deliberately tiny Portable Text renderer.
 *
 * Sanity's rich text is plain JSON, and the only mark this site uses is bold,
 * so rendering it takes ~15 lines. The official @portabletext/react package
 * requires React 19 and this app is on 18 — pulling it in would mean forcing a
 * peer conflict for one paragraph. If the content ever needs links, lists or
 * headings, swap this for the real package at that point.
 *
 * Unsupported blocks are skipped rather than throwing: a missing sentence is
 * recoverable, a white screen is not.
 */
export default function RichText({ value, strongStyle }) {
  if (!Array.isArray(value)) return null;

  return (
    <>
      {value.map((block, bi) => {
        if (block?._type !== "block" || !Array.isArray(block.children)) {
          return null;
        }
        return (
          <React.Fragment key={block._key || bi}>
            {block.children.map((span, si) => {
              const text = span?.text ?? "";
              const bold =
                Array.isArray(span?.marks) && span.marks.includes("strong");
              return bold ? (
                <strong key={span._key || si} style={strongStyle}>
                  {text}
                </strong>
              ) : (
                <React.Fragment key={span._key || si}>{text}</React.Fragment>
              );
            })}
          </React.Fragment>
        );
      })}
    </>
  );
}

/** Turn a plain string into a Portable Text block, for fallback copy. */
export const plainBlock = (text) => [
  {
    _type: "block",
    _key: "fallback",
    style: "normal",
    children: [{ _type: "span", _key: "s0", text, marks: [] }],
  },
];
