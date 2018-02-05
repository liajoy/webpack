module.exports = {
  "helpers": {
    "if_or": function(v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "applicationType": {
      "type": "list",
      "message": "application type",
      "choices": [{
        "name": "build for SPA",
        "value": "SPA",
        "short": "SPA"
      }, {
        "name": "build for MPA",
        "value": "MAP",
        "short": "MAP"
      }]
    },
    "typescript": {
      "type": "confirm",
      "message": "Use Typescript?"
    },
    "build": {
      "type": "list",
      "message": "Vue build",
      "choices": [{
        "name": "Runtime + Compiler: recommended for most users",
        "value": "standalone",
        "short": "standalone"
      }, {
        "name": "Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere",
        "value": "runtime",
        "short": "runtime"
      }]
    },
    "router": {
      "type": "confirm",
      "message": "Install vue-router?"
    },
    "vuex": {
      "type": "confirm",
      "message": "Install vuex?"
    },    
    "lint": {
      "type": "confirm",
      "message": "Use ESLint to lint your code?"
    },
    "lintConfig": {
      "when": "lint",
      "type": "list",
      "message": "Pick an ESLint preset",
      "choices": [{
        "name": "Standard (https://github.com/standard/standard)",
        "value": "standard",
        "short": "Standard"
      }, {
        "name": "Airbnb (https://github.com/airbnb/javascript)",
        "value": "airbnb",
        "short": "Airbnb"
      }, {
        "name": "none (configure it yourself)",
        "value": "none",
        "short": "none"
      }]
    },
    "tslint": {
      "when": "typescript",
      "type": "confirm",
      "message": "Use TSLint to lint your TypeScript code?"
    },
    "tslintConfig": {
      "when": "tslint",
      "type": "list",
      "message": "Pick a TSLint preset",
      "choices": [
        {
          "name": "Standard (https://github.com/blakeembrey/tslint-config-standard)",
          "value": "standard",
          "short": "Standard"
        },
        {
          "name": "AirBNB (https://github.com/progre/tslint-config-airbnb)",
          "value": "airbnb",
          "short": "AirBNB"
        },
        {
          "name": "none (configure it yourself)",
          "value": "none",
          "short": "none"
        }
      ]
    },
    "unit": {
      "type": "confirm",
      "message": "Setup unit tests with Karma + Mocha?"
    },
    "e2e": {
      "type": "confirm",
      "message": "Setup e2e tests with Nightwatch?"
    },
    "utils": {
      "type": "confirm",
      "message": "Install lodash & axios & qs?"
    }
  },
  "filters": {
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "tslint.json": "tslint",
    "tsconfig.json": "typescript",
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "build/webpack.test.conf.js": "unit",
    "test/e2e/**/*": "e2e",
    "src/router/**/*": "router && applicationType == 'SPA'",
    "src/store/**/*": "vuex && applicationType == 'SPA'",
    "index.html": "applicationType == 'SPA'",
    "src/App.vue": "applicationType == 'SPA'",
    "src/main.js": "applicationType == 'SPA'",
    "pages/**/*": "applicationType == 'MPA'",
    "src/entries/**/*": "applicationType == 'MPA'"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};