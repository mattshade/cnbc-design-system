import{j as e}from"./jsx-runtime-CiJ6rYVq.js";import{u as i,M as o}from"./blocks-CaQ6Mktc.js";import"./iframe-BvluC3IG.js";import"./preload-helper-B7SxNM_P.js";import"./index-Bdh_r2_w.js";function r(n){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Foundations/Layout & grid"}),`
`,e.jsx(s.h1,{id:"layout--grid",children:"Layout & grid"}),`
`,e.jsx(s.h2,{id:"global-structure",children:"Global structure"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Fixed navigation"})," — ",e.jsx(s.code,{children:"main"})," uses ",e.jsx(s.strong,{children:"72px"})," top padding so content clears the bar (",e.jsx(s.code,{children:"src/index.css"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Scroll targets"})," — sections with ",e.jsx(s.code,{children:'id="projects"'})," and ",e.jsx(s.code,{children:'id="experience"'})," use ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"scroll-margin-top: 80px"})})," so in-page anchors land comfortably below the nav."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Max content width"})," — section wrappers use ",e.jsx(s.code,{children:".section-inner"})," patterns (see ",e.jsx(s.code,{children:"App.css"})," / component CSS) to keep line length and alignment consistent."]}),`
`]}),`
`,e.jsx(s.h2,{id:"blueprint-grid",children:"Blueprint grid"}),`
`,e.jsxs(s.p,{children:["The page background exposes a ",e.jsx(s.strong,{children:"40×40px"})," technical grid (radial + linear strokes) using ",e.jsx(s.code,{children:"--grid-color"})," on ",e.jsx(s.code,{children:"--bg"}),". Components sit ",e.jsx(s.strong,{children:"on"})," this grid, not necessarily with 40px padding everywhere—use multiples of ",e.jsx(s.strong,{children:"8px"})," for internal spacing unless a token says otherwise."]}),`
`,e.jsx(s.h2,{id:"responsive-review",children:"Responsive review"}),`
`,e.jsxs(s.p,{children:["Storybook ships ",e.jsx(s.strong,{children:"viewport presets"})," in the toolbar (mobile / tablet / desktop / ultrawide). Review ",e.jsx(s.strong,{children:"Components"})," stories at ",e.jsx(s.strong,{children:"375px"})," minimum before sign-off."]}),`
`,e.jsx(s.h2,{id:"glass-surfaces",children:"Glass surfaces"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:".glass"})})," — blur + ",e.jsx(s.code,{children:"--bg-glass"})," + ",e.jsx(s.code,{children:"--border"})," + ",e.jsx(s.code,{children:"--shadow-md"})," — default cards and panels."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:".glass-strong"})})," — elevated fill + stronger border — emphasis without a second accent color."]}),`
`]}),`
`,e.jsxs(s.p,{children:["Radii are ",e.jsx(s.strong,{children:"12px"})," (glass) and ",e.jsx(s.strong,{children:"16px"})," (glass-strong) in the current system—keep new surfaces aligned unless a tokenized radius is introduced."]})]})}function h(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{h as default};
