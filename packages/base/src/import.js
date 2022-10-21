module.exports = {
  plugins: [ "import" ],
  settings: {
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$",
    ],
  },
  rules: {
    /**
     * Static analysis
     */

    // ensure imports point to files/modules that can be resolved
    "import/no-unresolved": "off",
    // ensure named imports coupled with named exports
    "import/named": "off",
    // ensure default import coupled with default export
    "import/default": "off",
    // ensure imported namespaces contain dereferenced properties as they are dereferenced
    "import/namespace": "off",

    /**
     * Helpful warnings
     */

    // disallow invalid exports, e.g. multiple defaults
    "import/export": "off",
    // reports use of an exported name as the locally imported name of a default export
    "import/no-named-as-default": "error",
    // Reports use of an exported name as a property on the default export
    "import/no-named-as-default-member": "warn",
    // disallow use of jsdoc-marked-deprecated imports
    "import/no-deprecated": "off",
    // Forbid the use of extraneous packages
    "import/no-extraneous-dependencies": "off",
    // Forbid mutable exports
    "import/no-mutable-exports": "off",

    /**
     * Module systems
     */
    // Report potentially ambiguous parse goal (script vs. module)
    "import/unambiguous": "off",
    // disallow require()
    "import/no-commonjs": "off",
    // disallow AMD require/define
    "import/no-amd": "warn",
    // No Node.js builtin modules
    "import/no-nodejs-modules": "off",

    /**
     * Style guide
     */
    "import/first": "error",
    "import/no-duplicates": "error",
    // disallow namespace imports
    "import/no-namespace": "off",
    // Ensure consistent use of file extension within the import path
    "import/extensions": "off",
    "import/order": [
      "off", {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "never",
      },
    ],

    "import/newline-after-import": "warn",
    "import/prefer-default-export": "off",
    // Restrict which files can be imported in a given folder
    "import/no-restricted-paths": "off",
    // Forbid modules to have too many dependencies
    "import/max-dependencies": ["off", { max: 10 }],
    // Forbid import of modules using absolute paths
    "import/no-absolute-path": "off",
    // Forbid require() calls with expressions
    "import/no-dynamic-require": "off",
    // prevent importing the submodules of other modules
    "import/no-internal-modules": [
      "off", {
        allow: [],
      },
    ],
    // Forbid Webpack loader syntax in imports
    "import/no-webpack-loader-syntax": "off",
    // Prevent unassigned imports
    // importing for side effects is perfectly acceptable, if you need side effects.
    "import/no-unassigned-import": "off",
    // 禁止 import { default as foo } from './foo.js'
    // 应写成 import foo from './foo.js'
    "import/no-named-default": "off",
    // Reports if a module's default export is unnamed
    "import/no-anonymous-default-export": [
      "off", {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    // This rule enforces that all exports are declared at the bottom of the file.
    "import/exports-last": "off",
    // Prefer named exports to be grouped together in a single export declaration
    "import/group-exports": "off",
    // forbid default exports. this is a terrible rule, do not use it.
    "import/no-default-export": "off",
    // 不要产生自引用
    "import/no-self-import": "error",
    // 不要产生循环引用
    "import/no-cycle": ["error", { maxDepth: Infinity }],
    // Ensures that there are no useless path segments
    "import/no-useless-path-segments": "off",
    // dynamic imports require a leading comment with a webpackChunkName
    "import/dynamic-import-chunkname": [
      "off", {
        importFunctions: [],
        webpackChunknameFormat: "[0-9a-zA-Z-_/.]+",
      },
    ],
    // Use this rule to prevent imports to folders in relative parent paths.
    "import/no-relative-parent-imports": "off",
  },
};
