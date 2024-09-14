"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6105],{5203:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=t(6070),i=t(5296);const s={sidebar_position:2,description:"The syntax of lua"},l="Syntax",r={id:"essentials/basic-lua/basic-syntax",title:"Syntax",description:"The syntax of lua",source:"@site/docs/essentials/basic-lua/basic-syntax.md",sourceDirName:"essentials/basic-lua",slug:"/essentials/basic-lua/basic-syntax",permalink:"/Roblox-Studio-Guide/docs/essentials/basic-lua/basic-syntax",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/essentials/basic-lua/basic-syntax.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"The syntax of lua"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/Roblox-Studio-Guide/docs/essentials/basic-lua/introduction"},next:{title:"Data types",permalink:"/Roblox-Studio-Guide/docs/essentials/basic-lua/data-types"}},a={},c=[{value:"Hello, World!",id:"hello-world",level:2},{value:"Code comments",id:"code-comments",level:2},{value:"Multi-line comments",id:"multi-line-comments",level:3}];function d(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"syntax",children:"Syntax"})}),"\n",(0,o.jsx)(n.admonition,{title:"what you will learn",type:"note",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Getting familar with onecompiler"}),"\n",(0,o.jsx)(n.li,{children:"Trying to print values in output"}),"\n",(0,o.jsx)(n.li,{children:"Code comments"}),"\n"]})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"hello-world",children:"Hello, World!"}),"\n",(0,o.jsx)(n.p,{children:"The first thing you will see in the compiler is this code."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:'print("Hello, World!")\n'})}),"\n",(0,o.jsxs)(n.p,{children:['This code will print in the output "Hello, World!" which is a common thing that most programs often start with. Now on the top right corner press ',(0,o.jsx)(n.code,{children:"RUN"}),". That will run the code you provided with a output of ",(0,o.jsx)(n.code,{children:"Hello, World!"}),". Welcome to your first script! Simple as that!"]}),"\n",(0,o.jsx)(n.h2,{id:"code-comments",children:"Code comments"}),"\n",(0,o.jsx)(n.p,{children:"Often you would want write comments or notes to yourself that won't affect your codebase. Either its for helping other people understand your code or for your future self edit the code again. It will be a guidance that could help you and others pick up and understand your code more quickly."}),"\n",(0,o.jsxs)(n.p,{children:["Now lets delete our ",(0,o.jsx)(n.code,{children:'print("hello world")'})," code and leave everything blank. Then write this as our first code comment!"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:'--print("hello world")\n'})}),"\n",(0,o.jsx)(n.p,{children:"Try running the code. If there isn't output of anything then you're getting this right! Code comments aren't supposed to do anything or affect your code in any way."}),"\n",(0,o.jsx)(n.admonition,{title:"How to use comments efficiently",type:"tip",children:(0,o.jsxs)(n.p,{children:["You ",(0,o.jsx)(n.em,{children:"shouldn't"})," use code comments for ",(0,o.jsx)(n.strong,{children:"all"})," of your code. Instead, only comment to code that is ",(0,o.jsx)(n.em,{children:"confusing"})," to you or other people. Also code comments can be used for ",(0,o.jsx)(n.strong,{children:"documentation"})," which is something we will take about later."]})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["for using ",(0,o.jsx)(n.code,{children:"--"})," as your code comment ",(0,o.jsx)(n.strong,{children:"only allows"})," a single line comment. Attempting to write something that couldn't be identified from the program will result in a error."]})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"multi-line-comments",children:"Multi-line comments"}),"\n",(0,o.jsxs)(n.p,{children:["Now what if you want to write a multi-line comment. We can't just make a ",(0,o.jsx)(n.em,{children:"new line"})," every time we want to say something. Or make the code comment ",(0,o.jsx)(n.em,{children:"unreasonably long"})," that you need to scroll right to read all the comments. This is where ",(0,o.jsx)(n.strong,{children:"multi-line comments"})," come in handy."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:"--[[\nno way this is a \nmulti-line comment!\n]]\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["in ",(0,o.jsx)(n.em,{children:"any"})," programming language that supports code comments (hopefully all programming languages have it \ud83d\ude05) you could write ",(0,o.jsx)(n.strong,{children:"anything"})," inside the comment. Including emojis and special characters. Code comments ",(0,o.jsx)(n.strong,{children:"do not"})," affect the execution speed of code. If you write a whole block of code that is pure comments it is completely fine."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},5296:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var o=t(758);const i={},s=o.createContext(i);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);