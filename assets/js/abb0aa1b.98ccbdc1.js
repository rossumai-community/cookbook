"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[4588],{8651:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>O,contentTitle:()=>V,default:()=>P,frontMatter:()=>T,metadata:()=>N,toc:()=>B});var t=a(5893),r=a(1151),s=a(7294),i=a(512),o=a(2466),c=a(6550),l=a(469),d=a(1980),h=a(7392),u=a(812);function m(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return m(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,h.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function _(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:a}=e;const t=(0,c.k6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,d._X)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function g(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,r=p(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!_({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[c,d]=f({queryString:a,groupId:t}),[h,m]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,u.Nk)(a);return[t,(0,s.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:t}),g=(()=>{const e=c??h;return _({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!_({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var y=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function x(e){let{className:n,block:a,selectedValue:r,selectValue:s,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),h=e=>{const n=e.currentTarget,a=l.indexOf(n),t=c[a].value;t!==r&&(d(n),s(t))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},n),children:c.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:h,...s,className:(0,i.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:a??n},n)}))})}function v(e){let{lazy:n,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=g(e);return(0,t.jsxs)("div",{className:(0,i.Z)("tabs-container",b.tabList),children:[(0,t.jsx)(x,{...n,...e}),(0,t.jsx)(v,{...n,...e})]})}function S(e){const n=(0,y.Z)();return(0,t.jsx)(j,{...e,children:m(e.children)},String(n))}const w={tabItem:"tabItem_Ymn6"};function I(e){let{children:n,hidden:a,className:r}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.Z)(w.tabItem,r),hidden:a,children:n})}const T={title:"NetSuite: Import configuration",sidebar_position:2,sidebar_label:"Import configuration"},V="Import configuration",N={id:"extensions/netsuite/import-configuration",title:"NetSuite: Import configuration",description:"Notice that each configuration has concurrency_limit configured. The best way how to determine the right number is to visit Setup \u2192 Integration \u2192 Integration Governance where you can see (and configure) not only the concurrency limits but also peak concurrency of all integrations allowing you to choose the best number.",source:"@site/docs/extensions/netsuite/import-configuration.md",sourceDirName:"extensions/netsuite",slug:"/extensions/netsuite/import-configuration",permalink:"/docs/extensions/netsuite/import-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/extensions/netsuite/import-configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"NetSuite: Import configuration",sidebar_position:2,sidebar_label:"Import configuration"},sidebar:"extensionsSidebar",previous:{title:"Integration configuration",permalink:"/docs/extensions/netsuite/integration-configuration"},next:{title:"Export configuration",permalink:"/docs/extensions/netsuite/export-configuration"}},O={},B=[{value:"Differential data imports (daily)",id:"differential-data-imports-daily",level:2},{value:"Async settings",id:"async-settings",level:3},{value:"Importing individual records",id:"importing-individual-records",level:3},{value:"Using advanced transaction search",id:"using-advanced-transaction-search",level:2},{value:"Main line advanced search",id:"main-line-advanced-search",level:3},{value:"Initial full data imports",id:"initial-full-data-imports",level:2}];function C(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"import-configuration",children:"Import configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Notice that each configuration has ",(0,t.jsx)(n.code,{children:"concurrency_limit"})," configured. The best way how to determine the right number is to visit ",(0,t.jsx)(n.strong,{children:"Setup \u2192 Integration \u2192 Integration Governance"})," where you can see (and configure) not only the concurrency limits but also peak concurrency of all integrations allowing you to choose the best number."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Visit the following link when trying to figure out how should the import searches be configured (drill down to the required fields): ",(0,t.jsx)(n.a,{href:"https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2022_2/schema/search/transactionsearch.html?mode=package",children:"https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2022_2/schema/search/transactionsearch.html?mode=package"})]})}),"\n",(0,t.jsx)(n.h2,{id:"differential-data-imports-daily",children:"Differential data imports (daily)"}),"\n",(0,t.jsxs)(n.p,{children:["Recommended schedule: ",(0,t.jsx)(n.code,{children:"0 22 * * *"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "run_async": true,\n  "netsuite_settings": {\n    "account": "XXX_SB1", // Case sensitive!\n    "concurrency_limit": 4,\n    "wsdl_url": "https://XXX-sb1.suitetalk.api.netsuite.com/wsdl/v2024_1_0/netsuite.wsdl",\n    "service_url": "https://XXX-sb1.suitetalk.api.netsuite.com/services/NetSuitePort_2024_1",\n    "service_binding_name": "{urn:platform_2024_1.webservices.netsuite.com}NetSuiteBinding"\n  },\n  "import_configs": [\n    {\n      // Currencies\n      "master_data_name": "NS_SB1_Currency_v1",\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n      "payload": {\n        "method_name": "getAll",\n        "method_args": [\n          {\n            "_ns_type": "GetAllRecord",\n            "recordType": "currency"\n          }\n        ]\n      }\n    },\n    {\n      // Inventory items\n      "master_data_name": "NS_SB1_InventoryItem_v1",\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "_ns_type": "ItemSearchBasic",\n            "type": {\n              "searchValue": "_inventoryItem",\n              "operator": "anyOf"\n            },\n            "isInactive": {\n              "searchValue": false\n            }\n          }\n        ],\n        "method_headers": {\n          "searchPreferences": {\n            "pageSize": 100,\n            "bodyFieldsOnly": false,\n            "returnSearchColumns": false\n          }\n        }\n      }\n    },\n    {\n      // Item Receipts (GRNs)\n      "master_data_name": "NS_SB1_ItemReceipt_v1",\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "_ns_type": "TransactionSearchBasic",\n            "type": {\n              "operator": "anyOf",\n              "searchValue": "_itemReceipt"\n            },\n            "lastModifiedDate": {\n              "operator": "onOrAfter",\n              "searchValue": "{last_modified_date}"\n            }\n          }\n        ],\n        "method_headers": {\n          "searchPreferences": {\n            "pageSize": 100,\n            "bodyFieldsOnly": false,\n            "returnSearchColumns": false\n          }\n        }\n      }\n    },\n    {\n      // Locations\n      "master_data_name": "NS_SB1_Location_v1",\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "_ns_type": "LocationSearchBasic"\n          }\n        ],\n        "method_headers": {\n          "searchPreferences": {\n            "pageSize": 100,\n            "bodyFieldsOnly": false,\n            "returnSearchColumns": false\n          }\n        }\n      }\n    },\n    {\n      // Purchase Orders\n      "master_data_name": "NS_SB1_PurchaseOrder_v1",\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "_ns_type": "TransactionSearchBasic",\n            "type": {\n              "searchValue": "_purchaseOrder",\n              "operator": "anyOf"\n            },\n            "lastModifiedDate": {\n              "operator": "onOrAfter",\n              "searchValue": "{last_modified_date}"\n            }\n          }\n        ],\n        "method_headers": {\n          "searchPreferences": {\n            "pageSize": 100,\n            "bodyFieldsOnly": false,\n            "returnSearchColumns": false\n          }\n        }\n      }\n    },\n    {\n      // Subsidiaries\n      "master_data_name": "NS_SB1_Subsidiary_v1",\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "_ns_type": "SubsidiarySearchBasic",\n            "isInactive": {\n              "searchValue": "false"\n            }\n          }\n        ],\n        "method_headers": {\n          "searchPreferences": {\n            "pageSize": 100,\n            "bodyFieldsOnly": false,\n            "returnSearchColumns": false\n          }\n        }\n      }\n    },\n    {\n      // Vendors\n      "master_data_name": "NS_SB1_Vendor_v1",\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "_ns_type": "VendorSearchBasic",\n            "isInactive": {\n              "searchValue": "false"\n            },\n            "lastModifiedDate": {\n              "operator": "onOrAfter",\n              "searchValue": "{last_modified_date}"\n            }\n          }\n        ],\n        "method_headers": {\n          "searchPreferences": {\n            "pageSize": 100,\n            "bodyFieldsOnly": false,\n            "returnSearchColumns": false\n          }\n        }\n      }\n    },\n    {\n      // Vendor Bills (Invoices)\n      "master_data_name": "NS_SB1_VendorBill_v1",\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "_ns_type": "TransactionSearchBasic",\n            "type": {\n              "searchValue": "_vendorBill",\n              "operator": "anyOf"\n            },\n            "lastModifiedDate": {\n              "operator": "onOrAfter",\n              "searchValue": "{last_modified_date}"\n            }\n          }\n        ],\n        "method_headers": {\n          "searchPreferences": {\n            "pageSize": 100,\n            "bodyFieldsOnly": false,\n            "returnSearchColumns": false\n          }\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"async-settings",children:"Async settings"}),"\n",(0,t.jsx)(n.p,{children:"Usually, all imports (as well as exports) will run in asynchronous mode, see:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "run_async": true\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If you'd like to modify the async settings, you can do so using the following ",(0,t.jsx)(n.code,{children:"async_settings"})," configuration:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "run_async": true,\n  "import_configs": [\n    {\n      "master_data_name": "NS_SB1_PurchaseOrder_v1",\n      // highlight-start\n      "async_settings": {\n        "retries": 2, // max: 10\n        "max_run_time_s": 7200 // 2 hours default, min: 60 (1 minute), max: 36000 (10 hours)\n        "valid_for_s": 43200 // 12 hours default, min: 300 (5 minutes), max: 172800 (2 days)\n      },\n      // highlight-end\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "_ns_type": "TransactionSearchBasic",\n            "type": {\n              "searchValue": "_purchaseOrder",\n              "operator": "anyOf"\n            }\n          }\n        ]\n      }\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Note that this configuration must be applied to all relevant import configs. Each config can even have a different timeouts and retries."}),"\n",(0,t.jsx)(n.h3,{id:"importing-individual-records",children:"Importing individual records"}),"\n",(0,t.jsx)(n.p,{children:"Sometimes, it can be handy to import just one specific record:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "run_async": true,\n  "import_configs": [\n    {\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "type": {\n              "operator": "anyOf",\n              "searchValue": "_purchaseOrder"\n            },\n            "tranId": {\n              "operator": "is",\n              "searchValue": "PO-45512"\n            },\n            "_ns_type": "TransactionSearchBasic"\n          }\n        ],\n        "method_headers": {\n          "searchPreferences": {\n            "bodyFieldsOnly": false,\n            "returnSearchColumns": false\n          }\n        }\n      },\n      "async_settings": {\n        "retries": 5\n      },\n      "master_data_name": "NS_SB1_PurchaseOrder_v1"\n    }\n  ],\n  "netsuite_settings": {\n    // \u2026\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"using-advanced-transaction-search",children:"Using advanced transaction search"}),"\n",(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.code,{children:"TransactionSearchAdvanced"})," can be beneficial if we want to select which fields should be fetched from NetSuite (to lower the payload size as well as data storage requirements). Additionally, it can be useful to fetch additional columns such as ",(0,t.jsx)(n.code,{children:"createdFromJoin"})," or ",(0,t.jsx)(n.code,{children:"applyingTransactionJoin"})," and similar."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Advanced transaction search requires 'Transactions \u2192 Find Transaction' permission."})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"TransactionSearchAdvanced"})," requires two main fields: ",(0,t.jsx)(n.code,{children:"criteria"})," (to specify the actual search) and ",(0,t.jsx)(n.code,{children:"columns"})," (to specify what columns should be returned). It is also important to set ",(0,t.jsx)(n.code,{children:"returnSearchColumns"})," to ",(0,t.jsx)(n.code,{children:"true"})," and finally ",(0,t.jsx)(n.code,{children:"advanced_search_internal_id_jmespath"})," to define unique identifier for the basic record:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "run_async": false,\n  "import_configs": [\n    {\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "_ns_type": "TransactionSearchAdvanced",\n            // highlight-start\n            "criteria": {\n              // highlight-end\n              "_ns_type": "TransactionSearch",\n              "basic": {\n                "_ns_type": "TransactionSearchBasic",\n                "type": {\n                  "operator": "anyOf",\n                  "searchValue": "_purchaseOrder"\n                },\n                "dateCreated": {\n                  "operator": "onOrAfter",\n                  "searchValue": "2024-01-01T00:00:00Z"\n                }\n              }\n            },\n            // highlight-start\n            "columns": {\n              // highlight-end\n              "_ns_type": "TransactionSearchRow",\n              "basic": {\n                "_ns_type": "TransactionSearchRowBasic",\n                "tranId": {},\n                "tranDate": {},\n                "internalId": {},\n                "externalId": {},\n                "recordType": {},\n                "dateCreated": {},\n                "lastModifiedDate": {}\n              },\n              "applyingTransactionJoin": {\n                "_ns_type": "TransactionSearchRowBasic",\n                "tranId": {},\n                "tranDate": {},\n                "internalId": {},\n                "externalId": {},\n                "recordType": {},\n                "dateCreated": {},\n                "lastModifiedDate": {}\n              }\n            }\n          }\n        ],\n        "method_headers": {\n          "searchPreferences": {\n            "pageSize": 100,\n            "bodyFieldsOnly": false,\n            // highlight-start\n            "returnSearchColumns": true\n            // highlight-end\n          }\n        }\n      },\n      "master_data_name": "NS_SB1_PurchaseOrder_v1",\n      // highlight-start\n      "advanced_search_internal_id_jmespath": "basic.internalId[0].searchValue.internalId"\n      // highlight-end\n    }\n  ],\n  "netsuite_settings": {\n    // \u2026\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"main-line-advanced-search",children:"Main line advanced search"}),"\n",(0,t.jsxs)(n.p,{children:["By default, the advanced search returns one record for each line item. In case we'd not care about the line items, we can change the search behavior to return one line per main line record by configuring ",(0,t.jsx)(n.code,{children:"criteria.basic.mainLine"})," (see ",(0,t.jsx)(n.a,{href:"https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4459563851.html",children:"Main Line in NetSuite"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "_ns_type": "TransactionSearchAdvanced",\n  "columns": {\n    "_ns_type": "TransactionSearchRow",\n    "basic": {\n      // \u2026\n    }\n  },\n  "criteria": {\n    "_ns_type": "TransactionSearch",\n    "basic": {\n      "_ns_type": "TransactionSearchBasic",\n      // highlight-start\n      "mainLine": {\n        "searchValue": true\n      }\n      // highlight-end\n      // \u2026\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"initial-full-data-imports",children:"Initial full data imports"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Rossum's team of Solution Architects is typically needed for large NetSuite imports and recoveries. Consider contacting ",(0,t.jsx)(n.a,{href:"https://rossum.ai/form/contact/",children:"Rossum Sales"})," department or Rossum Support team."]})}),"\n",(0,t.jsxs)(n.p,{children:["When creating a new organization, the Master Data Hub collections are empty and need to be imported from NetSuite. The most naive approach is to simply run the ",(0,t.jsx)(n.a,{href:"#differential-data-imports-daily",children:"differential import from above"})," which will on the first run import everything. This is because when the collections are empty, the ",(0,t.jsx)(n.code,{children:"last_modified_date"})," will default to January 1st, 1970 (effectively resulting in a full import)."]}),"\n",(0,t.jsxs)(n.p,{children:["However, initial imports are typically very large and can take ",(0,t.jsx)(n.strong,{children:"several days"})," when ran sequentially. It's expected that the initial imports can fail during this period. Moreover, the maximum runtime of import jobs is currently ",(0,t.jsx)(n.strong,{children:"10 hours"}),". The following section describes how to deal with such failures and how to approach initial imports in a less naive and more controlled way."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Consider whether full dataset import is necessary. It might be enough to pull the last year only, for example."})}),"\n",(0,t.jsxs)(n.p,{children:['All imported records typically have sorting specified. For example, all transactions are typically sorted by "Date Created", see: ',(0,t.jsx)(n.a,{href:"https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N3518731.html",children:"https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N3518731.html"})]}),"\n",(0,t.jsx)(n.p,{children:"We can leverage this default sorting and partition the initial imports to years (so that we can download several years in parallel):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "import_configs": [\n    {\n      // Download Purchase Orders for year 2022:\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "_ns_type": "TransactionSearchBasic",\n            "type": {\n              "operator": "anyOf",\n              "searchValue": "_purchaseOrder"\n            },\n            "dateCreated": {\n              // highlight-start\n              "operator": "within",\n              "searchValue": "2022-01-01T00:00:00Z",\n              "searchValue2": "2023-01-01T00:00:00Z"\n              // highlight-end\n            }\n          }\n        ],\n        "method_headers": {\n          "searchPreferences": {\n            "pageSize": 100,\n            "bodyFieldsOnly": false,\n            "returnSearchColumns": false\n          }\n        }\n      },\n      "master_data_name": "NS_SB1_PurchaseOrder_v1"\n    },\n    {\n      // Download Purchase Orders for year 2023:\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "_ns_type": "TransactionSearchBasic",\n            "type": {\n              "operator": "anyOf",\n              "searchValue": "_purchaseOrder"\n            },\n            "dateCreated": {\n              // highlight-start\n              "operator": "within",\n              "searchValue": "2023-01-01T00:00:00Z",\n              "searchValue2": "2024-01-01T00:00:00Z"\n              // highlight-end\n            }\n          }\n        ],\n        "method_headers": {\n          "searchPreferences": {\n            "pageSize": 100,\n            "bodyFieldsOnly": false,\n            "returnSearchColumns": false\n          }\n        }\n      },\n      "master_data_name": "NS_SB1_PurchaseOrder_v1"\n    },\n    {\n      // Download Purchase Orders for the rest of the years:\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "type": {\n              "operator": "anyOf",\n              "searchValue": "_purchaseOrder"\n            },\n            "_ns_type": "TransactionSearchBasic",\n            "dateCreated": {\n              // highlight-start\n              "operator": "onOrAfter",\n              "searchValue": "2024-01-01T00:00:00Z"\n              // highlight-end\n            }\n          }\n        ],\n        "method_headers": {\n          "searchPreferences": {\n            "pageSize": 100,\n            "bodyFieldsOnly": false,\n            "returnSearchColumns": false\n          }\n        }\n      },\n      "master_data_name": "NS_SB1_PurchaseOrder_v1"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["It is necessary to observe whether all the partitions were imported successfully. In case they were not (for example some network issue cause the import jobs to fail), we can adjust the ",(0,t.jsx)(n.code,{children:"within"})," window to ignore the already imported dates and restart the import. To check the latest available date in the partition, you can use the following MongoDB query:"]}),"\n",(0,t.jsxs)(S,{children:[(0,t.jsxs)(I,{value:"basic",label:"Basic search",default:!0,children:[(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Confusingly, NetSuite returns ",(0,t.jsx)(n.code,{children:"createdDate"})," field but the SOAP API exposes ",(0,t.jsx)(n.code,{children:"dateCreated"})," search argument instead!"]})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "aggregate": [\n    {\n      "$match": {\n        "createdDate": {\n          "$gte": { "$date": "2024-01-01T00:00:00Z" },\n          "$lte": { "$date": "2025-01-01T00:00:00Z" }\n        }\n      }\n    },\n    { "$sort": { "createdDate": -1 } },\n    { "$limit": 3 },\n    { "$project": { "createdDate": 1, "itemList": 1 } }\n  ]\n}\n'})})]}),(0,t.jsx)(I,{value:"advanced",label:"Advanced search",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "aggregate": [\n    {\n      "$match": {\n        "basic.dateCreated.searchValue": {\n          "$gte": { "$date": "2024-01-01T00:00:00Z" },\n          "$lte": { "$date": "2025-01-01T00:00:00Z" }\n        }\n      }\n    },\n    { "$sort": { "basic.dateCreated.searchValue": -1 } },\n    { "$limit": 3 },\n    { "$project": { "__basic_dateCreated": { "$first": "$basic.dateCreated.searchValue" } } }\n  ]\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["After the successful import, it is a good idea to run differential import (using ",(0,t.jsx)(n.code,{children:"lastModifiedDate"}),") for the period during which we were performing the initial migration (to synchronize records that were updated in the meantime):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "lastModifiedDate": {\n    "operator": "onOrAfter",\n    "searchValue": "__date of the full import start__" // replace with ISO date format\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"And finally, it is possible to switch to differential imports only:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "lastModifiedDate": {\n    "operator": "onOrAfter",\n    "searchValue": "{last_modified_date}"\n  }\n}\n'})})]})}function P(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(C,{...e})}):C(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>i});var t=a(7294);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);