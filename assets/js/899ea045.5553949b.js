"use strict";(self.webpackChunkcookbook=self.webpackChunkcookbook||[]).push([[7245],{8050:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=t(5893),r=t(1151),s=t(4866),o=t(5162);const i={title:"Import webhook",sidebar_position:3},c=void 0,l={id:"extensions/netsuite/import-webhook",title:"Import webhook",description:"Notice that each configuration has concurrency_limit configured. The best way how to determine the right number is to visit Setup > Integration > Integration Governance where you can see (and configure) not only the concurrency limits but also peak concurrency of all integrations allowing you to choose the best number.",source:"@site/docs/extensions/netsuite/import-webhook.md",sourceDirName:"extensions/netsuite",slug:"/extensions/netsuite/import-webhook",permalink:"/cookbook/docs/extensions/netsuite/import-webhook",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai-community/cookbook/tree/master/docs/extensions/netsuite/import-webhook.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Import webhook",sidebar_position:3},sidebar:"extensionsSidebar",previous:{title:"Configuration",permalink:"/cookbook/docs/extensions/netsuite/configuration"},next:{title:"Export webhook",permalink:"/cookbook/docs/extensions/netsuite/export-webhook"}},d={},u=[{value:"Differential data imports (daily)",id:"differential-data-imports-daily",level:2},{value:"Async settings",id:"async-settings",level:3},{value:"Initial full data imports",id:"initial-full-data-imports",level:2},{value:"Recovering from failed initial imports",id:"recovering-from-failed-initial-imports",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Notice that each configuration has ",(0,a.jsx)(n.code,{children:"concurrency_limit"})," configured. The best way how to determine the right number is to visit ",(0,a.jsx)(n.strong,{children:"Setup > Integration > Integration Governance"})," where you can see (and configure) not only the concurrency limits but also peak concurrency of all integrations allowing you to choose the best number."]}),"\n",(0,a.jsx)(n.h2,{id:"differential-data-imports-daily",children:"Differential data imports (daily)"}),"\n",(0,a.jsxs)(n.p,{children:["Recommended schedule: ",(0,a.jsx)(n.code,{children:"0 0 * * *"})]}),"\n",(0,a.jsxs)(s.Z,{groupId:"netsuite-flavor",queryString:!0,children:[(0,a.jsxs)(o.Z,{value:"modern",label:"Modern",default:!0,children:[(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Visit the following link when trying to figure out how should the import searches be configured (drill down to the required fields): ",(0,a.jsx)(n.a,{href:"https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2022_2/schema/search/transactionsearch.html?mode=package",children:"https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2022_2/schema/search/transactionsearch.html?mode=package"})]})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "run_async": true,\n  "netsuite_settings": {\n    "account": "XXX_SB1", // Case sensitive!\n    "concurrency_limit": 4,\n    "wsdl_url": "https://XXX-sb1.suitetalk.api.netsuite.com/wsdl/v2024_1_0/netsuite.wsdl",\n    "service_url": "https://XXX-sb1.suitetalk.api.netsuite.com/services/NetSuitePort_2024_1",\n    "service_binding_name": "{urn:platform_2024_1.webservices.netsuite.com}NetSuiteBinding"\n  },\n  "import_configs": [\n    {\n      // Currencies\n      "master_data_name": "sandbox_NS_Currency_v1",\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n      "payload": {\n        "soap_method": "getAll",\n        "soap_record": {\n          "_ns_type": "GetAllRecord",\n          "recordType": "currency"\n        }\n      }\n    },\n    {\n      // Inventory items\n      "master_data_name": "sandbox_NS_InventoryItem_v1",\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n      "payload": {\n        "soap_method": "search",\n        "soap_record": {\n          "_ns_type": "ItemSearchBasic",\n          "type": {\n            "searchValue": "_inventoryItem",\n            "operator": "anyOf"\n          },\n          "isInactive": {\n            "searchValue": false\n          }\n        }\n      }\n    },\n    {\n      // Item Receipts (GRNs)\n      "master_data_name": "sandbox_NS_ItemReceipt_v1",\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n      "payload": {\n        "soap_method": "search",\n        "soap_record": {\n          "_ns_type": "TransactionSearchBasic",\n          "type": {\n            "operator": "anyOf",\n            "searchValue": "_itemReceipt"\n          },\n          "lastModifiedDate": {\n            "operator": "onOrAfter",\n            "searchValue": "{last_modified_date}"\n          }\n        }\n      }\n    },\n    {\n      // Locations\n      "master_data_name": "sandbox_NS_Location_v1",\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n      "payload": {\n        "soap_method": "search",\n        "soap_record": {\n          "_ns_type": "LocationSearchBasic"\n        }\n      }\n    },\n    {\n      // Purchase Orders\n      "master_data_name": "sandbox_NS_PurchaseOrder_v1",\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n      "payload": {\n        "soap_method": "search",\n        "soap_record": {\n          "_ns_type": "TransactionSearchBasic",\n          "type": {\n            "searchValue": "_purchaseOrder",\n            "operator": "anyOf"\n          },\n          "lastModifiedDate": {\n            "operator": "onOrAfter",\n            "searchValue": "{last_modified_date}"\n          }\n        }\n      }\n    },\n    {\n      // Subsidiaries\n      "master_data_name": "sandbox_NS_Subsidiary_v1",\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n      "payload": {\n        "soap_method": "search",\n        "soap_record": {\n          "_ns_type": "SubsidiarySearchBasic",\n          "isInactive": {\n            "searchValue": "false"\n          }\n        }\n      }\n    },\n    {\n      // Vendors\n      "master_data_name": "sandbox_NS_Vendor_v1",\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n      "payload": {\n        "soap_method": "search",\n        "soap_record": {\n          "_ns_type": "VendorSearchBasic",\n          "isInactive": {\n            "searchValue": "false"\n          },\n          "lastModifiedDate": {\n            "operator": "onOrAfter",\n            "searchValue": "{last_modified_date}"\n          }\n        }\n      }\n    },\n    {\n      // Vendor Bills (Invoices)\n      "master_data_name": "sandbox_NS_VendorBill_v1",\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n      "payload": {\n        "soap_method": "search",\n        "soap_record": {\n          "_ns_type": "TransactionSearchBasic",\n          "type": {\n            "searchValue": "_vendorBill",\n            "operator": "anyOf"\n          },\n          "lastModifiedDate": {\n            "operator": "onOrAfter",\n            "searchValue": "{last_modified_date}"\n          }\n        }\n      }\n    }\n  ]\n}\n'})})]}),(0,a.jsxs)(o.Z,{value:"original",label:"Original",children:[(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:['The following "original" configuration is ',(0,a.jsx)(n.strong,{children:"deprecated"}),'. Consider using the "modern" version instead.']})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "run_async": true,\n  "import_config": [\n    {\n      // Currencies\n      "ns_type": "Currency",\n      "search_type": "getAll",\n      "master_data_name": "sandbox_NS_Currency_v1"\n    },\n    {\n      // Inventory items\n      "ns_type": "Item",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_InventoryItem_v1",\n      "basic_search_config": {\n        "attributes": [\n          {\n            "ns_type": "SearchEnumMultiSelectField",\n            "operator": "anyOf",\n            "searchValue": "_inventoryItem",\n            "attribute_name": "type"\n          },\n          {\n            "ns_type": "SearchBooleanField",\n            "searchValue": "false",\n            "attribute_name": "isInactive"\n          },\n          {\n            "ns_type": "SearchDateField",\n            "operator": "onOrAfter",\n            "searchValue": "${last_modified_date}",\n            "attribute_name": "lastModifiedDate"\n          }\n        ]\n      }\n    },\n    {\n      // Item Receipts (GRNs)\n      "ns_type": "Transaction",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_ItemReceipt_v1",\n      "basic_search_config": {\n        "attributes": [\n          {\n            "ns_type": "SearchEnumMultiSelectField",\n            "operator": "anyOf",\n            "searchValue": "_itemReceipt",\n            "attribute_name": "type"\n          },\n          {\n            "ns_type": "SearchDateField",\n            "operator": "onOrAfter",\n            "searchValue": "${last_modified_date}",\n            "attribute_name": "lastModifiedDate"\n          }\n        ]\n      }\n    },\n    {\n      // Locations\n      "ns_type": "Location",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_Location_v1"\n    },\n    {\n      // Purchase Orders\n      "ns_type": "Transaction",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_PurchaseOrder_v1",\n      "basic_search_config": {\n        "attributes": [\n          {\n            "ns_type": "SearchEnumMultiSelectField",\n            "operator": "anyOf",\n            "searchValue": "_purchaseOrder",\n            "attribute_name": "type"\n          },\n          {\n            "ns_type": "SearchDateField",\n            "operator": "onOrAfter",\n            "searchValue": "${last_modified_date}",\n            "attribute_name": "lastModifiedDate"\n          }\n        ]\n      }\n    },\n    {\n      // Subsidiaries\n      "ns_type": "Subsidiary",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_Subsidiary_v1"\n    },\n    {\n      // Vendors\n      "ns_type": "Vendor",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_Vendor_v1"\n    },\n    {\n      // Vendor Bills (Invoices)\n      "ns_type": "Transaction",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_VendorBill_v1",\n      "basic_search_config": {\n        "attributes": [\n          {\n            "ns_type": "SearchEnumMultiSelectField",\n            "operator": "anyOf",\n            "searchValue": "_vendorBill",\n            "attribute_name": "type"\n          },\n          {\n            "ns_type": "SearchDateField",\n            "operator": "onOrAfter",\n            "searchValue": "${last_modified_date}",\n            "attribute_name": "lastModifiedDate"\n          }\n        ]\n      }\n    }\n  ],\n  "concurrency_limit": 4\n}\n'})})]})]}),"\n",(0,a.jsx)(n.h3,{id:"async-settings",children:"Async settings"}),"\n",(0,a.jsx)(n.p,{children:"Usually, all imports (as well as exports) will run in asynchronous mode, see:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "run_async": true\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["If you'd like to modify the async settings, you can do so using the following ",(0,a.jsx)(n.code,{children:"async_settings"})," configuration:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "run_async": true,\n  "import_configs": [\n    {\n      "master_data_name": "sandbox_NS_PurchaseOrder_v1",\n      // highlight-start\n      "async_settings": {\n        "retries": 2, // max: 10\n        "max_run_time_s": 7200 // 2 hours default, min: 60 (1 minute), max: 36000 (10 hours)\n        "valid_for_s": 43200 // 12 hours default, min: 300 (5 minutes), max: 172800 (2 days)\n      },\n      // highlight-end\n      "payload": {\n        "soap_method": "search",\n        "soap_record": {\n          "_ns_type": "TransactionSearchBasic",\n          "type": {\n            "searchValue": "_purchaseOrder",\n            "operator": "anyOf"\n          }\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Note that this configuration must be applied to all relevant import configs. Each config can even have a different timeouts and retries."}),"\n",(0,a.jsx)(n.h2,{id:"initial-full-data-imports",children:"Initial full data imports"}),"\n",(0,a.jsx)(n.p,{children:"Periodic full data imports are typically not necessary. One exception, however, is initial import of the datasets where differential imports do not make sense."}),"\n",(0,a.jsxs)(n.p,{children:["For full imports, the configuration is essentially the same as for differential import with the only difference being removed ",(0,a.jsx)(n.code,{children:"last_modified_date"})," usages. For example, instead of using:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "import_configs": [\n    {\n      "master_data_name": "sandbox_NS_PurchaseOrder_v1",\n      "payload": {\n        "soap_method": "search",\n        "soap_record": {\n          "_ns_type": "TransactionSearchBasic",\n          "type": {\n            "searchValue": "_purchaseOrder",\n            "operator": "anyOf"\n          },\n          // highlight-start\n          "lastModifiedDate": {\n            "operator": "onOrAfter",\n            "searchValue": "{last_modified_date}"\n          }\n          // highlight-end\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["You'd simply remove the ",(0,a.jsx)(n.code,{children:"lastModifiedDate"})," resulting in:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "import_configs": [\n    {\n      "master_data_name": "sandbox_NS_PurchaseOrder_v1",\n      "payload": {\n        "soap_method": "search",\n        "soap_record": {\n          "_ns_type": "TransactionSearchBasic",\n          "type": {\n            "searchValue": "_purchaseOrder",\n            "operator": "anyOf"\n          }\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"recovering-from-failed-initial-imports",children:"Recovering from failed initial imports"}),"\n",(0,a.jsxs)(n.p,{children:["Initial imports are typically very large and can take ",(0,a.jsx)(n.strong,{children:"several days"}),". It's expected that the initial imports can fail during this period. The following section describes how to deal with such failures."]}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["Rossum's team of Solution Architects is typically needed for large NetSuite imports and recoveries. Consider contacting ",(0,a.jsx)(n.a,{href:"https://rossum.ai/form/contact/",children:"Rossum Sales"})," department or Rossum Support team."]})}),"\n",(0,a.jsxs)(n.p,{children:["All imported records typically have sorting specified: ",(0,a.jsx)(n.a,{href:"https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N3518731.html",children:"https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N3518731.html"})]}),"\n",(0,a.jsxs)(n.p,{children:["For example, in case of failed purchase orders import, we can find the latest imported records and their respective ",(0,a.jsx)(n.code,{children:"dateCreated"})," which can be used for narrowing down the transaction search (very similar to differential imports except it goes from a specific date):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "import_configs": [\n    {\n      "payload": {\n        "soap_method": "search",\n        "soap_record": {\n          "type": {\n            "operator": "anyOf",\n            "searchValue": "_purchaseOrder"\n          },\n          "_ns_type": "TransactionSearchBasic",\n          "dateCreated": {\n            "operator": "onOrAfter",\n            "searchValue": "2021-01-13T16:26:08"\n          }\n        }\n      },\n      "master_data_name": "sandbox_NS_PurchaseOrder_v1"\n    }\n  ]\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["After the successful import, it is a good idea to run differential import (using ",(0,a.jsx)(n.code,{children:"lastModifiedDate"}),") for the whole period when we were performing the initial migration to synchronize records that were updated in the meantime."]}),"\n",(0,a.jsx)(n.p,{children:"And finally, it is possible to switch to differential imports only:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "lastModifiedDate": {\n    "operator": "onOrAfter",\n    "searchValue": "{last_modified_date}"\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var a=t(512);const r={tabItem:"tabItem_Ymn6"};var s=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>j});var a=t(7294),r=t(512),s=t(2466),o=t(6550),i=t(469),c=t(1980),l=t(7392),d=t(12);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function _(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[o,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[l,u]=_({queryString:t,groupId:r}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),y=(()=>{const e=l??m;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{y&&c(y)}),[y]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=t(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(5893);function b(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=i[t].value;r!==a&&(l(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",y.tabList),children:[(0,g.jsx)(b,{...e,...n}),(0,g.jsx)(x,{...e,...n})]})}function j(e){const n=(0,f.Z)();return(0,g.jsx)(v,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var a=t(7294);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);