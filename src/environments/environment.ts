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

