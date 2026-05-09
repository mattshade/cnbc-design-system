module.exports=[18622,(a,b,c)=>{b.exports=a.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},3097,(a,b,c)=>{"use strict";b.exports=a.r(18622)},24476,(a,b,c)=>{"use strict";b.exports=a.r(3097).vendored["react-ssr"].ReactJsxRuntime},87023,(a,b,c)=>{"use strict";b.exports=a.r(3097).vendored["react-ssr"].React},93475,a=>{"use strict";var b=a.i(24476),c=a.i(87023);function d(){let[a,d]=(0,c.useState)(!1),[e,f]=(0,c.useState)(!1);(0,c.useEffect)(()=>{let a=setTimeout(()=>d(!0),600);return()=>clearTimeout(a)},[]);let g=()=>{d(!1),setTimeout(()=>f(!0),400)};return e?null:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        .explainer-overlay {
          position: fixed; bottom: 2rem; right: 2rem; z-index: 999999; max-width: 320px;
          background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(0,0,0,0.1); border-radius: 12px; padding: 1.25rem 1.5rem;
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.15);
          transform: translateY(20px); opacity: 0; pointer-events: none;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
          font-family: system-ui, -apple-system, sans-serif;
          text-align: left;
        }
        .explainer-overlay.visible { transform: translateY(0); opacity: 1; pointer-events: auto; }
        .explainer-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; }
        .explainer-title { font-size: 0.95rem; font-weight: 600; color: #111; margin: 0; display: flex; align-items: center; gap: 0.5rem; }
        .explainer-close { background: none; border: none; color: #666; cursor: pointer; padding: 0.25rem; margin: -0.25rem; border-radius: 4px; font-size: 1.25rem; line-height: 1; transition: background 0.2s, color 0.2s; }
        .explainer-close:hover { background: rgba(0,0,0,0.05); color: #000; }
        .explainer-text { font-size: 0.875rem; color: #444; line-height: 1.5; margin: 0; }
        .explainer-btn { display: inline-block; margin-top: 1rem; width: 100%; padding: 0.5rem; text-align: center; background: #93C572; color: #0a0a0b; border: none; border-radius: 6px; font-size: 0.875rem; font-weight: 500; cursor: pointer; transition: opacity 0.2s; }
        .explainer-btn:hover { opacity: 0.9; }
        @media (max-width: 480px) { .explainer-overlay { bottom: 1rem; right: 1rem; left: 1rem; max-width: none; } }
      `}}),(0,b.jsxs)("div",{className:`explainer-overlay ${a?"visible":""}`,children:[(0,b.jsxs)("div",{className:"explainer-header",children:[(0,b.jsxs)("h4",{className:"explainer-title",children:[(0,b.jsx)("span",{children:"👀"})," Context Note"]}),(0,b.jsx)("button",{className:"explainer-close","aria-label":"Close",onClick:g,children:"×"})]}),(0,b.jsx)("p",{className:"explainer-text",children:"Not all coding agents are created equal. This next-gen Next.js scorecard is a competitive teardown—evaluating heavy hitters like Claude Code, Cursor, and Antigravity. It's the strategic cheat sheet leadership uses before rolling out tooling to thousands of devs."}),(0,b.jsx)("button",{className:"explainer-btn",onClick:g,children:"Got it"})]})]})}a.s(["default",()=>d])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__67f4b18a._.js.map