"use strict";(self.webpackChunkcookbook=self.webpackChunkcookbook||[]).push([[9409],{2005:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=t(5893),i=t(1151);const s={sidebar_position:1,title:"Configuration examples"},a=void 0,c={id:"extensions/custom-format-exports/configuration-examples",title:"Configuration examples",description:"Maximum five export configs can be defined per annotation export.",source:"@site/docs/extensions/custom-format-exports/configuration-examples.md",sourceDirName:"extensions/custom-format-exports",slug:"/extensions/custom-format-exports/configuration-examples",permalink:"/cookbook/docs/extensions/custom-format-exports/configuration-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai-community/cookbook/tree/master/docs/extensions/custom-format-exports/configuration-examples.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Configuration examples"},sidebar:"extensionsSidebar",previous:{title:"Custom format exports",permalink:"/cookbook/docs/extensions/custom-format-exports/"},next:{title:"Find & Replace Values",permalink:"/cookbook/docs/category/find--replace-values"}},r={},l=[{value:"Custom CSV",id:"custom-csv",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"Maximum five export configs can be defined per annotation export."})}),"\n",(0,o.jsx)(n.h2,{id:"custom-csv",children:"Custom CSV"}),"\n",(0,o.jsx)(n.p,{children:"Define CSV header fields as well as the actual datapoints to be exported:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "export_configs": [\n    {\n      "export_id": "export_annotation_to_csv",\n      "file_content_template": "Document ID,Document Type,Quantity\\n{{field.document_id}},{{field.document_type}},{{field.line_items[0].item_quantity}}"\n    }\n  ]\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Alternatively, it is possible to leverage ",(0,o.jsx)(n.code,{children:"file_content_template_multiline"})," for better readability:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "export_configs": [\n    {\n      "export_id": "export_annotation_to_csv",\n      "file_content_template_multiline": [\n        "Document ID,Document Type,Quantity",\n        "{{field.document_id}},{{field.document_type}},{{field.line_items[0].item_quantity}}"\n      ],\n      "content_encoding": "utf-8"\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Both of the configurations should generate something like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csv",children:"Document ID,Document Type,Quantity\n123456,tax_invoice,750\n"})}),"\n",(0,o.jsx)(n.p,{children:"It is also possible to iterate line items:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "export_configs": [\n    {\n      "export_id": "export_annotation_to_csv",\n      "file_content_template_multiline": [\n        "Document ID,Document Type,Item Description,Item Quantity",\n        "{% for item in field.line_items %}{{field.document_id}},{{field.document_type}},{{item.item_description}},{{item.item_quantity}}\\n{% endfor %}"\n      ],\n      "content_encoding": "utf-8"\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"The generated CSV would now contain all the line items, for example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csv",children:"Document ID,Document Type,Item Description,Item Quantity\n123456,tax_invoice,AWS services #1,750\n123456,tax_invoice,AWS services #2,750\n123456,tax_invoice,AWS services #3,750\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.p,{children:['Note that such created CSV is not available anywhere in the UI, but it\'s rather created as a "document" which is referenced via annotation metadata (on annotation ',(0,o.jsx)(n.strong,{children:"export"})," event)."]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  // \u2026\n  "metadata": {\n    "custom_format_exports": [\n      {\n        "document": "https://elis.rossum.ai/api/v1/documents/123456",\n        "export_id": "export_annotation_to_csv"\n      }\n    ]\n  }\n}\n'})}),(0,o.jsxs)(n.p,{children:["This extension is typically to be used in combination with ",(0,o.jsx)(n.a,{href:"../generic-rest-api-export",children:"REST API Export extension"})," which knows how to work with it."]})]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var o=t(7294);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);