import { DecisionMatrixAbstractService } from 'src/app/decision-matrix/services/decision-matrix-abstract-service';
import { MockDecisionMatrixService } from 'src/app/decision-matrix/services/mock-decision-matrix.service';

export const environment = {
  production: true,
  providers: [
    {
      provide: DecisionMatrixAbstractService,
      // Use the mock decision matrix service since the real one has yet to be implemented
      useClass: MockDecisionMatrixService,
    },
  ],
};
