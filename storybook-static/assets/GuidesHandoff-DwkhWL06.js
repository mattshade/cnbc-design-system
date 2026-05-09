import{j as e}from"./jsx-runtime-CiJ6rYVq.js";import{u as o,M as r}from"./blocks-CaQ6Mktc.js";import"./iframe-BvluC3IG.js";import"./preload-helper-B7SxNM_P.js";import"./index-Bdh_r2_w.js";function i(n){const s={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Guides/Handoff & QA"}),`
`,e.jsx(s.h1,{id:"handoff--qa",children:"Handoff & QA"}),`
`,e.jsx(s.h2,{id:"for-designers",children:"For designers"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Name tokens, not hex"})," — reference ",e.jsx(s.code,{children:"--accent"}),", ",e.jsx(s.code,{children:"--text-muted"}),", etc. Specs that map to ",e.jsx(s.code,{children:"src/index.css"})," merge faster."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Use this Storybook"})," as the review surface: same build pipeline as production (",e.jsx(s.code,{children:"vite"})," + React 18)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Annotate states"})," — default, hover, focus, loading, and error (where applicable). Stories can be duplicated per state when needed."]}),`
`]}),`
`,e.jsx(s.h2,{id:"for-engineers",children:"For engineers"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Styling:"})," prefer CSS variables and existing utilities (",e.jsx(s.code,{children:".glass"}),", section classes) before new one-off classes."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Routing:"})," anything using ",e.jsx(s.code,{children:"Link"})," or ",e.jsx(s.code,{children:"useLocation"})," is wrapped in ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"MemoryRouter"})})," in ",e.jsx(s.code,{children:".storybook/preview.ts"})," — do not remove without updating stories."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Assets:"})," static files live in ",e.jsx(s.code,{children:"public/"}),"; Storybook serves them via ",e.jsx(s.code,{children:"staticDirs"})," in ",e.jsx(s.code,{children:".storybook/main.ts"}),"."]}),`
`]}),`
`,e.jsx(s.h2,{id:"qa-checklist-before-ship",children:"QA checklist (before ship)"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["[ ] Key ",e.jsx(s.strong,{children:"Components"})," stories pass ",e.jsx(s.strong,{children:"Accessibility"})," at default viewport."]}),`
`,e.jsxs(s.li,{children:["[ ] ",e.jsx(s.strong,{children:"Pages → Resume"})," matches resume layout in production (nav + footer + document)."]}),`
`,e.jsxs(s.li,{children:["[ ] ",e.jsx(s.strong,{children:"Components → Projects section"})," opens modal and closes via backdrop + button."]}),`
`,e.jsx(s.li,{children:"[ ] No console errors in Storybook or production build."}),`
`]}),`
`,e.jsx(s.h2,{id:"chromatic",children:"Chromatic"}),`
`,e.jsxs(s.p,{children:["Chromatic is wired via ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"@chromatic-com/storybook"})}),". Use it for visual regression on critical stories when the pipeline is enabled."]})]})}function a(n={}){const{wrapper:s}={...o(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{a as default};
