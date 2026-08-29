# TypeScript conventions

Reach this file when changing TypeScript, particularly across untyped boundaries (gray-matter frontmatter, JSON files, external APIs).

## Fix at the source; never silence

Never silence a type error with `typescript.ignoreBuildErrors` in `next.config.js`, `// @ts-ignore`, or `// @ts-expect-error`. Invalid code still ships — silencing only hides the surface that would have caught it.

## Normalize untyped boundaries at the read site

When a value from an untyped source lands in the project's types, normalize it where it enters and give it a real type. Don't work around the `any` at every call site.

**Example — gray-matter `draft`.** `lib/api.ts:getPostBySlug` calls `matter()` and gets back `data: { [key: string]: any }`. The `draft` field could be `true` (YAML boolean), `'true'` (YAML string), or absent. The function narrows it to `boolean` at the read site:

```ts
type Items = {
  draft?: boolean
  [key: string]: any
}

// inside the field-assignment loop:
if (field === 'draft') {
  items[field] = data[field] === true || data[field] === 'true';
}
```

Callers can then compare with `===` / `!==` without re-doing the normalization, and the `Items` index signature remains `any` because the upstream source is genuinely `any` for fields we haven't explicitly typed.

Apply the same shape to any other untyped boundary (JSON config, third-party SDK responses) before the value leaves the file that reads it.
