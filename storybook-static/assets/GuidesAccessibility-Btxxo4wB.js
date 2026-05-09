import{j as e}from"./jsx-runtime-CiJ6rYVq.js";import{u as r,M as o}from"./blocks-CaQ6Mktc.js";import"./iframe-BvluC3IG.js";import"./preload-helper-B7SxNM_P.js";import"./index-Bdh_r2_w.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Guides/Accessibility"}),`
`,e.jsx(n.h1,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.h2,{id:"in-storybook",children:"In Storybook"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.strong,{children:"Accessibility"})," addon runs against each story. Treat ",e.jsx(n.strong,{children:"serious"})," violations as merge blockers; ",e.jsx(n.strong,{children:"moderate"})," issues need a ticket or fix before release."]}),`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.strong,{children:"viewport"})," toolbar to confirm tap targets and reading order on narrow widths."]}),`
`]}),`
`,e.jsx(n.h2,{id:"product-rules",children:"Product rules"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus:"})," interactive elements must show visible focus; accent color is available for focus rings where components define them."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Images:"})," project and hero imagery use ",e.jsx(n.code,{children:'alt=""'})," when decorative; meaningful thumbnails include descriptive ",e.jsx(n.code,{children:"alt"})," in data when added."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Motion:"})," decorative animation (e.g. boids) is ",e.jsx(n.code,{children:"aria-hidden"})," and must not convey unique information."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Modals:"})," project detail sets ",e.jsx(n.code,{children:'role="dialog"'}),", locks body scroll, and exposes a close control."]}),`
`]}),`
`,e.jsx(n.h2,{id:"color",children:"Color"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Primary reading pairs ",e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"--text"})," on ",e.jsx(n.code,{children:"--bg"})]})," — lime accent is for links and emphasis, not long-form body text at small sizes."]}),`
`,e.jsxs(n.li,{children:["When proposing new surfaces, check ",e.jsx(n.strong,{children:"contrast"})," against WCAG AA for text and interactive states."]}),`
`]})]})}function h(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{h as default};
