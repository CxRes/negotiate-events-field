/*!
 *  Copyright (c) 2025, Rahul Gupta and Negotiate Events Field contributors
 *
 *  This Source Code Form is subject to the terms of the Mozilla Public
 *  License, v. 2.0. If a copy of the MPL was not distributed with this
 *  file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 *  SPDX-License-Identifier: MPL-2.0
 */
import { parseDictionary } from "structured-headers";
import { useTry } from "no-try";
import getDuration from "./duration.js";

/**
 * Negotiates the properties of the HTTP response stream carrying events.
 *
 * Currently, the only negotiated property is the response duration. Duration
 * defaults to 600 seconds and caps at 1200 seconds. These values can be
 * adjusted respectively using the `EVENTS_RESPONSE_DURATION` and
 * `EVENTS_RESPONSE_MAX_DURATION` environment variables. If the header is
 * missing or cannot be parsed, the default value is applied.
 *
 * @example
 *   import { createServer } from "node:http";
 *   import { serializeDictionary } from "structured-headers";
 *   import negotiateEventsField from "negotiate-events-field";
 *
 *   const server = createServer((req, res) => {
 *     const eventsReq = req.getHeader("events");
 *     const eventsRes = negotiateEventsField(eventsReq);
 *     res.setHeader("Events", serializeDictionary(eventsRes));
 *   });
 *
 * @param {string} eventsRequestHeader A
 *   {@link https://www.rfc-editor.org/rfc/rfc8941.html#name-dictionaries|Dictionary structured}
 *   ({@link https://www.rfc-editor.org/rfc/rfc8941.html|RFC8941}) header field
 * @returns {object} The negotiated events object; Use a library like
 *   {@link https://github.com/badgateway/structured-headers|Structured Headers}
 *   to serialize the returned object before setting the response header.
 */
function negotiateEventsField(eventsRequestHeader) {
  const [, eventsRequest] = useTry(() => parseDictionary(eventsRequestHeader));

  // get duration
  const duration = getDuration(eventsRequest?.get("duration")?.[0]);

  // build the negotiated events response object
  const eventsResponse = {
    duration,
  };

  return Object.freeze(eventsResponse);
}

export default negotiateEventsField;
