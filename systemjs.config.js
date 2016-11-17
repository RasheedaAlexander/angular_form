/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.ts',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.ts',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.ts',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.ts',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.ts',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.ts',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.ts',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.ts',

      // other libraries
      'rxts':                       'npm:rxts',
      'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.ts',
        defaultExtension: 'ts'
      },
      rxts: {
        defaultExtension: 'ts'
      },
      'angular2-in-memory-web-api': {
        main: './index.ts',
        defaultExtension: 'ts'
      }
    }
  });
})(this);
