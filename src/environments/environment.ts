// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  apis: {
    product: {
      list: 'https://crudcrud.com/api/cc13922c153d4c42b243ede9dfde97a9/products', 
      create: 'https://crudcrud.com/api/cc13922c153d4c42b243ede9dfde97a9/products', 
      delete: 'https://crudcrud.com/api/cc13922c153d4c42b243ede9dfde97a9/products/{id}', 
      update: 'https://crudcrud.com/api/cc13922c153d4c42b243ede9dfde97a9/products/{id}',
      read: 'https://crudcrud.com/api/cc13922c153d4c42b243ede9dfde97a9/products/{id}'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
