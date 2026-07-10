/*!
 *  Copyright (c) 2025-2026, Rahul Gupta and Negotiate Events Field contributors
 *
 *  This Source Code Form is subject to the terms of the Mozilla Public
 *  License, v. 2.0. If a copy of the MPL was not distributed with this
 *  file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 *  SPDX-License-Identifier: MPL-2.0
 */
import { describe, it, expect } from "vitest";
import negotiateEventsField from "./index.js";

describe("negotiateEventsField", () => {
  it("returns default for invalid input", () => {
    expect(negotiateEventsField("invalid")).toStrictEqual({ duration: 60 });
  });

  it("returns default when no duration is specified", () => {
    expect(negotiateEventsField("other=1")).toStrictEqual({ duration: 60 });
  });

  it("returns specified duration", () => {
    expect(negotiateEventsField("duration=30")).toStrictEqual({
      duration: 30,
    });
  });

  it("ignores parameters on duration", () => {
    expect(negotiateEventsField('duration=30;foo="bar"')).toStrictEqual({
      duration: 30,
    });
  });

  it("ignores duration if its an innerlist", () => {
    expect(negotiateEventsField("duration=(10 foo ?1)")).toStrictEqual({
      duration: 60,
    });
  });

  it("caps duration at max", () => {
    expect(negotiateEventsField("duration=1201")).toStrictEqual({
      duration: 120,
    });
  });

  it("returns default for invalid duration value", () => {
    expect(negotiateEventsField("duration=abc")).toStrictEqual({
      duration: 60,
    });
  });

  it("handles zero duration", () => {
    expect(negotiateEventsField("duration=0")).toStrictEqual({
      duration: 60,
    });
  });
});
