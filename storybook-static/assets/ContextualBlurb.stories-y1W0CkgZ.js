import{j as t}from"./jsx-runtime-CiJ6rYVq.js";import{r}from"./iframe-BvluC3IG.js";import"./preload-helper-B7SxNM_P.js";function o({id:e,text:l,className:n="",delay:i=1e3,title:u="Context Note"}){const[O,c]=r.useState(!1),[h,B]=r.useState(!1);r.useEffect(()=>{B(!0);const g=setTimeout(()=>c(!0),i);return()=>clearTimeout(g)},[i]);const C=()=>{c(!1)};return h?t.jsxs("div",{id:e,className:`contextual-blurb ${O?"visible":""} ${n}`,children:[u?t.jsx("div",{className:"contextual-blurb-header",children:t.jsxs("h4",{className:"contextual-blurb-title",children:[t.jsx("span",{className:"contextual-blurb-emoji","aria-hidden":!0,children:"👀"})," ",u]})}):null,t.jsx("p",{children:l}),t.jsx("button",{type:"button",onClick:C,"aria-label":"Dismiss",children:"Got it"})]}):null}try{o.displayName="ContextualBlurb",o.__docgenInfo={description:"",displayName:"ContextualBlurb",filePath:"/Users/mattshade/PORTFOLIO1.2/src/components/ContextualBlurb.tsx",methods:[],props:{id:{defaultValue:null,declarations:[{fileName:"PORTFOLIO1.2/src/components/ContextualBlurb.tsx",name:"ContextualBlurbProps"}],description:"",name:"id",parent:{fileName:"PORTFOLIO1.2/src/components/ContextualBlurb.tsx",name:"ContextualBlurbProps"},required:!0,tags:{},type:{name:"string"}},text:{defaultValue:null,declarations:[{fileName:"PORTFOLIO1.2/src/components/ContextualBlurb.tsx",name:"ContextualBlurbProps"}],description:"",name:"text",parent:{fileName:"PORTFOLIO1.2/src/components/ContextualBlurb.tsx",name:"ContextualBlurbProps"},required:!0,tags:{},type:{name:"string"}},className:{defaultValue:{value:""},declarations:[{fileName:"PORTFOLIO1.2/src/components/ContextualBlurb.tsx",name:"ContextualBlurbProps"}],description:"",name:"className",parent:{fileName:"PORTFOLIO1.2/src/components/ContextualBlurb.tsx",name:"ContextualBlurbProps"},required:!1,tags:{},type:{name:"string"}},delay:{defaultValue:{value:"1000"},declarations:[{fileName:"PORTFOLIO1.2/src/components/ContextualBlurb.tsx",name:"ContextualBlurbProps"}],description:"",name:"delay",parent:{fileName:"PORTFOLIO1.2/src/components/ContextualBlurb.tsx",name:"ContextualBlurbProps"},required:!1,tags:{},type:{name:"number"}},title:{defaultValue:{value:"Context Note"},declarations:[{fileName:"PORTFOLIO1.2/src/components/ContextualBlurb.tsx",name:"ContextualBlurbProps"}],description:"Shown in the card header; omit for a text-only card",name:"title",parent:{fileName:"PORTFOLIO1.2/src/components/ContextualBlurb.tsx",name:"ContextualBlurbProps"},required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const{within:y,userEvent:P}=__STORYBOOK_MODULE_TEST__,v={title:"Components/ContextualBlurb",component:o,decorators:[e=>t.jsx("div",{style:{padding:"5rem",background:"#0a0a0b",minHeight:"300px"},children:t.jsx(e,{})})],tags:["autodocs"]},a={args:{id:"story-blurb",text:"This is a technical system insight.",title:"Interaction Lab"}},s={args:{...a.args,text:"Click the 'Got it' button to test the dismissal interaction."},play:async({canvasElement:e})=>{const n=await y(e).findByLabelText(/dismiss/i,{},{timeout:3e3});await P.click(n)}};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 'story-blurb',
    text: "This is a technical system insight.",
    title: 'Interaction Lab'
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var x,b,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    text: "Click the 'Got it' button to test the dismissal interaction."
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Wait for the blurb to be visible (it has a 1s delay by default)
    const dismissButton = await canvas.findByLabelText(/dismiss/i, {}, {
      timeout: 3000
    });
    await userEvent.click(dismissButton);
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const L=["Default","InteractionTest"];export{a as Default,s as InteractionTest,L as __namedExportsOrder,v as default};
