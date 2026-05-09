import{j as e}from"./jsx-runtime-CiJ6rYVq.js";import{u as t,M as i,C as c,a as n,T as d}from"./blocks-CaQ6Mktc.js";import"./iframe-BvluC3IG.js";import"./preload-helper-B7SxNM_P.js";import"./index-Bdh_r2_w.js";function o(r){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Introduction/Visual language"}),`
`,e.jsx(s.h1,{id:"visual-language",children:"Visual language"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Architectural blueprint identity"})," — technical precision, high-contrast type, and a single lime accent system shared across the portfolio and this Storybook."]}),`
`,e.jsx(s.h2,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Source of truth:"})," all tokens live on ",e.jsx(s.code,{children:":root"})," in ",e.jsx(s.code,{children:"src/index.css"})," (imported by the app and Storybook preview). Components and stories should read these ",e.jsx(s.strong,{children:"CSS variables"}),"—not one-off hex values—so color, type, elevation, and glass treatments stay consistent."]}),`
`,e.jsxs(s.p,{children:[`| Token | Role |
| --- | --- |
| `,e.jsx(s.code,{children:"--bg"}),` | Page background |
| `,e.jsx(s.code,{children:"--bg-elevated"}),` | Raised surfaces |
| `,e.jsx(s.code,{children:"--bg-glass"})," | Glass panels (",e.jsx(s.code,{children:"backdrop-filter"}),` companions) |
| `,e.jsx(s.code,{children:"--border"}),` | Default hairline dividers |
| `,e.jsx(s.code,{children:"--border-strong"}),` | Emphasized edges / inputs |
| `,e.jsx(s.code,{children:"--text"}),` | Primary copy |
| `,e.jsx(s.code,{children:"--text-muted"}),` | Secondary / meta text |
| `,e.jsx(s.code,{children:"--brand"}),` | Brand mark (same hue family as accent) |
| `,e.jsx(s.code,{children:"--accent"}),` | Links, focus, primary CTAs |
| `,e.jsx(s.code,{children:"--accent-secondary"}),` | Secondary emphasis (amber) |
| `,e.jsx(s.code,{children:"--hover"})," / ",e.jsx(s.code,{children:"--accent-hover"}),` | Hover / pressed link & control states |
| `,e.jsx(s.code,{children:"--accent-dim"}),` | Soft glows and text-shadow on hover |
| `,e.jsx(s.code,{children:"--grid-color"})," | Blueprint grid lines (with ",e.jsx(s.code,{children:"--bg"}),`) |
| `,e.jsx(s.code,{children:"--shadow-sm"}),` | Small elevation |
| `,e.jsx(s.code,{children:"--shadow-md"}),` | Deeper elevation |
| `,e.jsx(s.code,{children:"--shadow-glass"}),` | Floating glass cards |
| `,e.jsx(s.code,{children:"--font-sans"}),` | UI and body (Geist stack) |
| `,e.jsx(s.code,{children:"--font-mono"})," | Code and technical labels (Geist Mono stack) |"]}),`
`,e.jsxs(s.p,{children:["Structural spacing (e.g. ",e.jsx(s.code,{children:"main"})," offset for the fixed nav, ",e.jsx(s.code,{children:"scroll-margin"})," on section anchors) is also defined in that stylesheet so scroll and layout behave the same in production and in Storybook."]}),`
`,e.jsx(s.h2,{id:"primary-colors",children:"Primary colors"}),`
`,e.jsxs(c,{children:[e.jsx(n,{title:"Brand Lime",subtitle:"--brand, --accent",colors:{Lime:"#bef264"}}),e.jsx(n,{title:"Technical Amber",subtitle:"--accent-secondary",colors:{Amber:"#e2b35a"}}),e.jsx(n,{title:"Background Deep",subtitle:"--bg",colors:{Dark:"#0a0a0b"}}),e.jsx(n,{title:"Elevated",subtitle:"--bg-elevated",colors:{Surface:"#111113"}}),e.jsx(n,{title:"Text",subtitle:"--text",colors:{Primary:"#f3f4f6"}}),e.jsx(n,{title:"Text muted",subtitle:"--text-muted",colors:{Muted:"#9ca3af"}}),e.jsx(n,{title:"Glass Base",subtitle:"--bg-glass",colors:{Glass:"rgba(16, 16, 19, 0.7)"}})]}),`
`,e.jsx(s.h2,{id:"typography-summary",children:"Typography (summary)"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Primary stack:"})," Geist — see ",e.jsx(s.strong,{children:"Foundations → Typography"})," for scale and pairing."]}),`
`,e.jsx(d,{fontFamily:'"Geist", sans-serif',fontSizes:["12px","14px","16px","24px","32px","48px"],fontWeight:700,sampleText:"ARCHITECTURAL SYSTEMS"}),`
`,e.jsx(s.h2,{id:"structural-principles",children:"Structural principles"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Grid-first:"})," content aligns to a ",e.jsx(s.strong,{children:"40px"})," blueprint grid (see ",e.jsx(s.strong,{children:"Foundations → Layout & grid"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Micro-interactions:"})," hover uses ",e.jsx(s.code,{children:"cubic-bezier"})," easing and restrained scale—not novelty for its own sake."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Glass:"})," ",e.jsx(s.code,{children:".glass"})," / ",e.jsx(s.code,{children:".glass-strong"})," compose tokens with shared blur and radii—see ",e.jsx(s.code,{children:"src/index.css"}),"."]}),`
`]}),`
`,e.jsx(s.h2,{id:"storybook-setup",children:"Storybook setup"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Router:"})," ",e.jsx(s.code,{children:".storybook/preview.ts"})," wraps every story in ",e.jsx(s.code,{children:"MemoryRouter"})," so ",e.jsx(s.code,{children:"Link"})," / ",e.jsx(s.code,{children:"useLocation"})," work (",e.jsx(s.code,{children:"Resume"}),", ",e.jsx(s.code,{children:"Nav"}),", etc.)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Static assets:"})," ",e.jsx(s.code,{children:".storybook/main.ts"})," maps ",e.jsx(s.code,{children:"public/"})," so ",e.jsx(s.code,{children:"/images/…"})," and other static files resolve in stories."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Where to go next:"})," ",e.jsx(s.strong,{children:"Pages → Resume"})," for the resume shell; ",e.jsx(s.strong,{children:"Components → Projects section"})," for the full grid and modal."]}),`
`]})]})}function u(r={}){const{wrapper:s}={...t(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(o,{...r})}):o(r)}export{u as default};
