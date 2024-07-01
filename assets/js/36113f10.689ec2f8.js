"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[7245],{1240:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var a=r(5893),o=r(1151);const t={title:"Coupa: Import configurations",sidebar_position:1,sidebar_label:"Import configurations"},i="Import configurations (API)",c={id:"learn/coupa/import-configuration",title:"Coupa: Import configurations",description:"Currencies",source:"@site/docs/learn/coupa/import-configuration.md",sourceDirName:"learn/coupa",slug:"/learn/coupa/import-configuration",permalink:"/docs/learn/coupa/import-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/learn/coupa/import-configuration.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Coupa: Import configurations",sidebar_position:1,sidebar_label:"Import configurations"},sidebar:"learnSidebar",previous:{title:"Coupa",permalink:"/docs/learn/coupa/"},next:{title:"Export configurations",permalink:"/docs/learn/coupa/export-configuration"}},s={},d=[{value:"Currencies",id:"currencies",level:2},{value:"Suppliers",id:"suppliers",level:2},{value:"Lookup values",id:"lookup-values",level:2},{value:"Units of measure(ment)",id:"units-of-measurement",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"import-configurations-api",children:"Import configurations (API)"}),"\n",(0,a.jsx)(n.h2,{id:"currencies",children:"Currencies"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026",\n    "client_scope": "core.accounting.read, core.business_entity.read, core.catalog.read, core.comment.read, core.common.read, core.expense.read, core.expense.secure.read, core.integration.read, core.inventory.adjustment.read, core.inventory.asn.read, core.inventory.balance.read, core.inventory.common.read, core.inventory.consumption.read, core.inventory.cycle_counts.read, core.inventory.pick_list.read, core.inventory.receiving.read, core.inventory.return_to_supplier.read, core.inventory.transaction.read, core.inventory.transfer.read, core.invoice.approval.bypass, core.invoice.assignment.read, core.invoice.create, core.invoice.delete, core.invoice.read, core.item.read, core.legal_entity.read, core.notifications_summary.read, core.object_translations.read, core.order_header_confirmations.read, core.order_pad.read, core.pay.charges.read, core.pay.payment_accounts.read, core.pay.payments.read, core.pay.statements.read, core.pay.virtual_cards.read, core.payables.allocations.read, core.payables.expense.read, core.payables.external.read, core.payables.invoice.read, core.payables.order.read, core.project.read, core.punchout_site.read, core.purchase_order_change.read, core.purchase_order.read, core.requisition.assignment.read, core.requisition.read, core.sourcing.pending_supplier.read, core.sourcing.read, core.sourcing.response.read, core.supplier_information_sites.read, core.supplier_information_tax_registrations.delete, core.supplier_information_tax_registrations.read, core.supplier_sharing_settings.read, core.supplier_sites.read, core.supplier.read, core.supplier.risk_aware.read, core.translation.read, core.uom.read, core.user_group.read, core.user.read"\n  },\n  "import_config": {\n    "query": {\n      "fields": ["id", "code", "decimals"]\n    },\n    "method": "replace",\n    "endpoint": "api/currencies",\n    "dataset_name": "dataset_currencies",\n    "records_per_request": 50\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"suppliers",children:"Suppliers"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026",\n    "client_scope": "core.accounting.read, core.common.read, core.invoice.create, core.invoice.read, core.invoice.write, core.purchase_order.read, core.supplier.read"\n  },\n  "import_config": {\n    "query": {\n      "fields": [\n        "id",\n        "created_at",\n        "updated_at",\n        "name",\n        "display_name",\n        "number",\n        "status",\n        "po_email",\n        "account_number",\n        "tax_id",\n        {\n          "primary_contact": [\n            "id",\n            "created_at",\n            "updated_at",\n            "email",\n            "name_prefix",\n            "name_suffix",\n            "name_additional",\n            "name_given",\n            "name_family",\n            "name_fullname",\n            "notes",\n            "active",\n            "purposes"\n          ]\n        },\n        {\n          "primary_address": [\n            "id",\n            "created_at",\n            "updated_at",\n            "name",\n            "location_code",\n            "street1",\n            "street2",\n            "street3",\n            "street4",\n            "city",\n            "state",\n            "postal_code",\n            "attention",\n            "active",\n            "business_group_name",\n            "vat_number",\n            "local_tax_number",\n            "type",\n            {\n              "country": ["id", "code", "name"]\n            },\n            {\n              "vat_country": ["id", "code", "name"]\n            }\n          ]\n        },\n        {\n          "remit_to_addresses": [\n            "id",\n            "created_at",\n            "updated_at",\n            "remit_to_code",\n            "name",\n            "street1",\n            "street2",\n            "street3",\n            "street4",\n            "city",\n            "state",\n            "postal_code",\n            "active",\n            "vat_number",\n            "local_tax_number",\n            "external_src_ref",\n            "external_src_name",\n            {\n              "country": ["id", "code", "name"]\n            }\n          ]\n        }\n      ]\n    },\n    "method": "replace",\n    "endpoint": "api/suppliers",\n    "dataset_name": "dataset_suppliers",\n    "records_per_request": 50\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"lookup-values",children:"Lookup values"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "...",\n    "base_api_url": "....coupacloud.com/",\n    "client_scope": "core.common.read"\n  },\n  "import_config": {\n    "query": {\n      "fields": [\n        "id",\n        "name",\n        "external-ref-num",\n        "external-ref-code",\n        "active",\n        {\n          "parent": [\n            "id",\n            "name",\n            "active",\n            {\n              "custom_fields": {}\n            },\n            {\n              "parent": [\n                "id",\n                "name",\n                "active",\n                {\n                  "custom_fields": {}\n                }\n              ]\n            }\n          ]\n        },\n        {\n          "lookup": ["id", "name", "active"]\n        },\n        {\n          "custom_fields": {}\n        }\n      ],\n      "order_by": "created_at",\n      "updated-at[gt_or_eq]": "${last_modified_date}"\n    },\n    "method": "update",\n    "id_keys": ["id"],\n    "endpoint": "api/lookup_values",\n    "dataset_name": "lookup_values",\n    "records_per_request": 50\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"units-of-measurement",children:"Units of measure(ment)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "...",\n    "base_api_url": "...coupacloud.com/",\n    "client_scope": "core.common.read"\n  },\n  "import_config": {\n    "query": {\n      "fields": [\n        "id",\n        "name",\n        "code",\n        "allowable-precession",\n        "active",\n        "updated-at",\n        "created-at"\n      ],\n      "order_by": "created_at",\n      "updated-at[gt_or_eq]": "${last_modified_date}"\n    },\n    "method": "update",\n    "id_keys": ["id"],\n    "endpoint": "api/uoms",\n    "dataset_name": "uoms",\n    "records_per_request": 50\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>i});var a=r(7294);const o={},t=a.createContext(o);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);