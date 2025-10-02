import dedent from "dedent";

const settings = Object.freeze({
  /* Header Notice */
  notice: {
    /* Header Format
       Properties not used need not be specified in these settings */
    template: dedent`
      Copyright (c) $<year>, $<author> and $<custom.project> contributors

      $<license>

      SPDX-License-Identifier: $<spdx>
    `,

    /* Query pattern for template string
       Since we do not use a templating engine */
    queryPattern: /\$<.*?>/g,

    /* Author of commit files
       (If not specifies will be queried directly from local git configuration) */
    // author: '',

    /* Contact Information of Commit File Author
       (If not specified will be queried directly from local git configuration) */
    // contact: '',

    /* Custom strings
       Properties starting with pkg are retrieved from package.json at cwd */
    custom: {
      /* Add your own custom property */
      project: "Negotiate Events Field",
    },

    /* License */
    license: {
      /* License Header
         (Preferred over header file) */
      notice: dedent`
        This Source Code Form is subject to the terms of the Mozilla Public
        License, v. 2.0. If a copy of the MPL was not distributed with this
        file, You can obtain one at http://mozilla.org/MPL/2.0/.
      `,
      /* Location of the License header file
         (relative to cwd) */
      // location: '',
    },

    /* License SPDX identifier
       (If not specified will be obtained from package.json file at cwd) */
    // spdx: '',
  },

  /* Add Settings */
  add: {
    /* Regex to detect template */
    detect: /Copyright \(c\) (?:\d{4}|-|, )*/,

    /* Regex for File Prefixes to preserve */
    filePrefix: {
      js: [
        "#!.*?",
        "#\\s*.*?coding=.*?",
        "\\/\\/\\s*@flow.*?",
        "\\/\\*\\s*@flow\\s*\\*\\/",
      ],
    },

    /* Comment style wrapping the header */
    commentStyles: {
      code: {
        blockStart: "/*!\n",
        blockEnd: "\n */",
        lineStart: " *  ",
      },
    },

    /* Mapping file type to comment style */
    extensionStyleMap: {
      js: "code",
      ts: "code",
    },
  },

  /* Update Settings */
  update: {
    /* Regex to Update
       Currently, only a capturing group named "date" containing year range is processed */
    match: /Copyright \(c\) (?<date>(?:\d{4}|-|, )*)/m,
    /* Date Type: list (default) or range */
    dateType: "range",
  },

  /* Files to ignore in Globstar format */
  ignore: [
    "{**,.}/node_modules/**",
    "{**,.}/.git/**",
    "{**,.}/_*/**",
    "{**,.}/[.]*/**",
    "{**,.}/*.config.js",
    "{**,.}/types/**",
    "{**,.}/coverage/**",
  ],
});

export default settings;
