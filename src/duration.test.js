/*!
 *  Copyright (c) 2025, Rahul Gupta and Negotiate Events Field contributors
 *
 *  This Source Code Form is subject to the terms of the Mozilla Public
 *  License, v. 2.0. If a copy of the MPL was not distributed with this
 *  file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 *  SPDX-License-Identifier: MPL-2.0
 */
import { describe, it, expect } from "vitest";
import getDuration from "./duration.js";

describe("getDuration", () => {
  it("returns default duration for non-number input", () => {
    expect(getDuration("abc")).toBe(60);
    expect(getDuration(null)).toBe(60);
    expect(getDuration(undefined)).toBe(60);
  });

  it("handles negative numbers as non-number", () => {
    expect(getDuration(-1)).toBe(60);
  });

  it("returns max duration if input is zero", () => {
    expect(getDuration(0)).toBe(120);
  });

  it("returns max duration if input exceeds max", () => {
    expect(getDuration(1201)).toBe(120);
    expect(getDuration(150)).toBe(120);
  });

  it("returns the input if within range", () => {
    expect(getDuration(1)).toBe(1);
    expect(getDuration(30)).toBe(30);
    expect(getDuration(59)).toBe(59);
  });
});
