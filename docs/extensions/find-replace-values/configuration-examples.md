---
sidebar_position: 1
title: 'Configuration examples'
---

The following examples are showing commonly used configurations when building applications using Rossum.ai platform.

## Normalize Values

The following snippet removes all non-alphanumeric characters. The source datapoint ID is `sender_vat_id` and the result has to be written to a different datapoint ID `sender_vat_id_normalized` not to affect the AI model.

```json
{
  "actions": [
    {
      "transformations": [
        {
          "pattern_to_replace": "[^a-zA-Z\\d]",
          "value_to_replace_with": ""
        }
      ],
      "source_target_mappings": [
        {
          "source": "sender_vat_id",
          "target": "sender_vat_id_normalized"
        }
      ]
    }
  ]
}
```

:::tip

Consider turning `sender_vat_id_normalized` into formula field instead where the same functionality can be rewritten as:

```python
''.join(filter(str.isalnum, fields.order_id.strip()))
```

:::

## Prepend and Append Values

The regular expressions use Python flavor which allows us to write references to capture groups as `\g<0>`, `\g<1>`, etc. The following example transforms order ID from `123` to `PO123/000` as an example (first prepend, later append):

```json
{
  "actions": [
    {
      "transformations": [
        {
          "pattern_to_replace": "^(?!(PO|$))(.+)$",
          "value_to_replace_with": "PO\\g<2>",
          "replace_if_this_pattern_matches": "^(?!(PO|$)).+$"
        },
        {
          "pattern_to_replace": "^(.+)(?<!/000)$",
          "value_to_replace_with": "\\g<1>/000",
          "replace_if_this_pattern_matches": "^.+(?<!/000)$"
        }
      ],
      "source_target_mappings": [
        {
          "source": "order_id",
          "target": "order_id_normalized"
        }
      ]
    }
  ]
}
```

It prepends/appends values only if they are not already present, and it handles empty values gracefully (no prepend/append).
