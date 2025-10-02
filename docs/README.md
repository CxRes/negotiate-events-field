# API

[RFC8941]: https://www.rfc-editor.org/rfc/rfc8941.html
[Dictionary structured]: https://www.rfc-editor.org/rfc/rfc8941.html#name-dictionaries

## Methods

### default

```ts
(eventsRequestHeader) => Readonly.<Events>;
```

Negotiates the properties of the HTTP response stream carrying events.

Currently, the only negotiated property is the response duration. Duration defaults to 60 seconds and caps at 120 seconds. These values can be adjusted respectively using the `EVENTS_RESPONSE_DURATION` and
`EVENTS_RESPONSE_MAX_DURATION` environment variables. If the header is missing or cannot be parsed, the default value is applied.

#### Parameters

<!-- prettier-ignore-start -->
| Param | Type | Description |
| --- | --- | --- |
| eventsRequestHeader | `string` | A [Dictionary structured] [[RFC8941]] header field value. |
<!-- prettier-ignore-end -->

#### Returns

<pre>Readonly.&lt;<a href="#events">Events</a>&gt;</pre>

The negotiated events object.

#### Example

```js
import { createServer } from "node:http";
import { serializeDictionary } from "structured-headers";
import negotiateEventsField from "negotiate-events-field";

const server = createServer((req, res) => {
  const eventsReq = req.getHeader("events");
  const eventsRes = negotiateEventsField(eventsReq);
  res.setHeader("Events", serializeDictionary(eventsRes));
});
```

## Type Definitions

### Events

<pre>object</pre>

A negotiated events object that can be serialized to a [Dictionary structured] [[RFC8941]] header field.

#### Properties

<!-- prettier-ignore-start -->
| Name | Type | Description |
| --- | --- | --- |
| duration | `number` | Duration in seconds |
<!-- prettier-ignore-end -->
