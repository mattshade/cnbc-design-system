import{j as n}from"./jsx-runtime-CiJ6rYVq.js";import{u as s,M as r}from"./blocks-CaQ6Mktc.js";import"./iframe-BvluC3IG.js";import"./preload-helper-B7SxNM_P.js";import"./index-Bdh_r2_w.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Foundations/Motion"}),`
`,n.jsx(e.h1,{id:"motion",children:"Motion"}),`
`,n.jsxs(e.p,{children:["Motion is ",n.jsx(e.strong,{children:"functional"}),": it orients attention, confirms interaction, and preserves performance. There are no decorative page-wide animations in the baseline system."]}),`
`,n.jsx(e.h2,{id:"timing--easing",children:"Timing & easing"}),`
`,n.jsxs(e.p,{children:[`| Pattern | Notes |
| --- | --- |
| `,n.jsx(e.strong,{children:"Entrance"})," | ",n.jsx(e.code,{children:"fadeUp"}),` — short translate + opacity; used for hero and section reveals. |
| `,n.jsx(e.strong,{children:"Hover (links)"})," | ",n.jsx(e.code,{children:"0.2s"})," with ",n.jsx(e.code,{children:"cubic-bezier(0.16, 1, 0.3, 1)"}),` — snappy, not bouncy. |
| `,n.jsx(e.strong,{children:"Grid pulse"})," | Slow ambient pulse on the fixed background grid — low amplitude so it never competes with content. |"]}),`
`,n.jsxs(e.p,{children:["Easing tokens are defined alongside ",n.jsx(e.code,{children:"@keyframes"})," in ",n.jsx(e.code,{children:"src/index.css"})," (e.g. ",n.jsx(e.code,{children:"fadeUp"}),", ",n.jsx(e.code,{children:"gridPulse"}),", ",n.jsx(e.code,{children:"float"}),", ",n.jsx(e.code,{children:"glow"}),")."]}),`
`,n.jsx(e.h2,{id:"principles",children:"Principles"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Prefer opacity and transform"})," — avoid animating ",n.jsx(e.code,{children:"box-shadow"})," or ",n.jsx(e.code,{children:"filter"})," on large layers during scroll."]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Respect ",n.jsx(e.code,{children:"prefers-reduced-motion"}),":"]})," critical paths should still work when motion is reduced (portfolio boids and decorative loops should not block comprehension)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Modal & overlay:"})," project detail uses backdrop + dialog; focus trap is handled in the component—keep durations under ",n.jsx(e.strong,{children:"300ms"})," for open/close."]}),`
`]}),`
`,n.jsx(e.h2,{id:"what-not-to-do",children:"What not to do"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"No autoplaying parallax on primary reading columns."}),`
`,n.jsx(e.li,{children:"No staggered list animations that delay access to resume or contact actions."}),`
`]})]})}function h(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{h as default};
