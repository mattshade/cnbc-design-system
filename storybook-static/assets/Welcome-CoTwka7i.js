import{j as e}from"./jsx-runtime-CiJ6rYVq.js";import{u as o,M as r}from"./blocks-CaQ6Mktc.js";import"./iframe-BvluC3IG.js";import"./preload-helper-B7SxNM_P.js";import"./index-Bdh_r2_w.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Introduction/Welcome"}),`
`,e.jsx(n.h1,{id:"matt-shade--portfolio-design-system",children:"Matt Shade — Portfolio design system"}),`
`,e.jsxs(n.p,{children:["Welcome to the ",e.jsx(n.strong,{children:"living documentation"})," for this site: the same React components, CSS tokens, and interaction patterns that ship to production—documented here for design critique, engineering handoff, and accessibility review."]}),`
`,e.jsx(n.h2,{id:"what-youll-find",children:"What you’ll find"}),`
`,e.jsxs(n.p,{children:[`| Area | Purpose |
| --- | --- |
| `,e.jsx(n.strong,{children:"Introduction"}),` | Vision, token inventory, and how this Storybook maps to the product. |
| `,e.jsx(n.strong,{children:"Foundations"}),` | Typography, motion, layout, and grid—before you open a component. |
| `,e.jsx(n.strong,{children:"Guides"}),` | Accessibility expectations and how we use this library in review. |
| `,e.jsx(n.strong,{children:"Components"})," | Isolated UI with ",e.jsx(n.strong,{children:"Controls"}),", ",e.jsx(n.strong,{children:"Accessibility"})," checks, and responsive ",e.jsx(n.strong,{children:"viewports"}),`. |
| `,e.jsx(n.strong,{children:"Pages"})," | Composed shells (e.g. resume) that mirror production routes. |"]}),`
`,e.jsx(n.h2,{id:"principles",children:"Principles"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"One source of truth:"})," semantic tokens on ",e.jsx(n.code,{children:":root"})," in ",e.jsx(n.code,{children:"src/index.css"}),"—no ad hoc hex in components."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dark architectural UI:"})," deep neutrals, lime accent, glass surfaces—built for clarity under real content."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ship what you see:"})," stories run in ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"MemoryRouter"})})," with ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"public/"})})," assets so screenshots match deployment."]}),`
`]}),`
`,e.jsx(n.h2,{id:"for-design-partners",children:"For design partners"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.strong,{children:"viewport"})," presets and the ",e.jsx(n.strong,{children:"Accessibility"})," panel while reviewing. Figma—or any other spec—should name ",e.jsx(n.strong,{children:"token roles"})," (e.g. “primary text”, “accent”) so we can map them to ",e.jsx(n.code,{children:"--text"}),", ",e.jsx(n.code,{children:"--accent"}),", and friends."]}),`
`,e.jsxs(n.p,{children:["Start with ",e.jsx(n.strong,{children:"Visual language"})," under Introduction for the full token table and color swatches."]})]})}function a(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{a as default};
