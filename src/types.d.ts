/*!
 *  Copyright (c) 2025, Rahul Gupta and Negotiate Events Field contributors
 *
 *  This Source Code Form is subject to the terms of the Mozilla Public
 *  License, v. 2.0. If a copy of the MPL was not distributed with this
 *  file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 *  SPDX-License-Identifier: MPL-2.0
 */

/**
 * A negotiated events object that can be serialized to a
 * {@link https://www.rfc-editor.org/rfc/rfc8941.html#name-dictionaries|Dictionary structured}
 * ({@link https://www.rfc-editor.org/rfc/rfc8941.html|RFC8941}) header field.
 */
export type Events = {
  /** Duration in seconds */
  duration: number;
};
