import{j as e}from"./jsx-runtime-CiJ6rYVq.js";import{u as i,M as r,T as o}from"./blocks-CaQ6Mktc.js";import"./iframe-BvluC3IG.js";import"./preload-helper-B7SxNM_P.js";import"./index-Bdh_r2_w.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Foundations/Typography"}),`
`,e.jsx(n.h1,{id:"typography",children:"Typography"}),`
`,e.jsx(n.h2,{id:"font-stacks-tokens",children:"Font stacks (tokens)"}),`
`,e.jsxs(n.p,{children:[`| Token | Use |
| --- | --- |
| `,e.jsx(n.code,{children:"--font-sans"})," | ",e.jsx(n.strong,{children:"Geist"}),` — UI, headings, body, marketing copy. |
| `,e.jsx(n.code,{children:"--font-mono"})," | ",e.jsx(n.strong,{children:"Geist Mono"})," — technical labels, code-adjacent UI, metrics. |"]}),`
`,e.jsxs(n.p,{children:["Fallbacks include system UI and ",e.jsx(n.code,{children:"ui-monospace"})," so the UI stays readable before webfonts load."]}),`
`,e.jsx(n.h2,{id:"scale-reference",children:"Scale (reference)"}),`
`,e.jsxs(n.p,{children:["Product sections use a ",e.jsx(n.strong,{children:"modular scale"})," anchored at ",e.jsx(n.strong,{children:"16px"})," body. Display sizes lean on ",e.jsx(n.code,{children:"clamp()"})," in section CSS where needed; stories below show static reference sizes."]}),`
`,e.jsx(n.h3,{id:"sans--geist",children:"Sans — Geist"}),`
`,e.jsx(o,{fontFamily:'"Geist", system-ui, sans-serif',fontSizes:["12px","14px","16px","18px","24px","32px","40px","48px"],fontWeight:600,sampleText:"Matt Shade — Engineering & Design"}),`
`,e.jsx(n.h3,{id:"mono--geist-mono",children:"Mono — Geist Mono"}),`
`,e.jsx(o,{fontFamily:'"Geist Mono", ui-monospace, monospace',fontSizes:["12px","13px","14px","16px"],fontWeight:500,sampleText:"const token = '--accent'"}),`
`,e.jsx(n.h2,{id:"usage-guidelines",children:"Usage guidelines"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sentence case"})," for UI labels and most headings; reserve ",e.jsx(n.strong,{children:"all-caps"})," for eyebrow / overline patterns only."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Line length:"})," prefer ~60–75 characters for reading comfort in wide layouts; section ",e.jsx(n.code,{children:"max-width"})," in CSS enforces this where it matters."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Contrast:"})," primary text uses ",e.jsx(n.code,{children:"--text"})," on ",e.jsx(n.code,{children:"--bg"}),"; secondary uses ",e.jsx(n.code,{children:"--text-muted"}),". Do not place lime (",e.jsx(n.code,{children:"--accent"}),") body copy on lime backgrounds without a darker companion token."]}),`
`]}),`
`,e.jsx(n.h2,{id:"pairing",children:"Pairing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hero & resume:"})," sans only; mono optional for small metadata lines."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Projects & cards:"})," title + subtitle + description hierarchy uses weight and ",e.jsx(n.code,{children:"--text-muted"}),", not a third font."]}),`
`]})]})}function x(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{x as default};
