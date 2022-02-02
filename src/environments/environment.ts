// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { DecisionMatrixAbstractService } from "src/app/decision-matrix/services/decision-matrix-abstract-service";
import { MockDecisionMatrixService } from "src/app/decision-matrix/services/mock-decision-matrix.service";

export const environment = {
  production: false,
  providers: [
    {
      provide: DecisionMatrixAbstractService,
      useClass: MockDecisionMatrixService,
    },
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
import { DecisionMatrixService } from '../app/decision-matrix/services/decision-matrix.service';
