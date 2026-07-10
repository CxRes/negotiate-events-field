/*!
 *  Copyright (c) 2025-2026, Rahul Gupta and Negotiate Events Field contributors
 *
 *  This Source Code Form is subject to the terms of the Mozilla Public
 *  License, v. 2.0. If a copy of the MPL was not distributed with this
 *  file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 *  SPDX-License-Identifier: MPL-2.0
 */
import process from "node:process";

/**
 * Maximum connection duration in seconds.
 *
 * Modifiable using the environment variable `EVENTS_RESPONSE_MAX_DURATION`.
 *
 * @constant
 * @default 120
 * @type {number}
 * @name EVENTS_RESPONSE_MAX_DURATION
 */
const MAX_DURATION = Number(process.env.EVENTS_RESPONSE_MAX_DURATION) || 120;

/**
 * Default connection duration in seconds.
 *
 * Modifiable using the environment variable `EVENTS_RESPONSE_DURATION`.
 *
 * @constant
 * @default 60
 * @type {number}
 * @name EVENTS_RESPONSE_DURATION
 */
const DURATION = Number(process.env.EVENTS_RESPONSE_DURATION) || 60;

/**
 * Returns a valid duration for the event response.
 *
 * - If the input is not a number or less than or equal to 0, returns the default
 *   duration.
 * - If the input exceeds the maximum, returns the maximum duration.
 * - Otherwise, returns the requested duration.
 *
 * @param {unknown} expectedDuration The requested duration in seconds
 * @returns {number} The bounded duration in seconds
 */
function getDuration(expectedDuration) {
  if (typeof expectedDuration !== "number" || expectedDuration <= 0) {
    return DURATION;
  } else if (expectedDuration > MAX_DURATION) {
    return MAX_DURATION;
  }
  return expectedDuration;
}

export default getDuration;
