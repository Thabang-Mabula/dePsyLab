import { DecisionMatrixAbstractService } from 'src/app/decision-matrix/services/decision-matrix-abstract-service';
import { DecisionMatrixService } from '../app/decision-matrix/services/decision-matrix.service';
export const environment = {
  production: true,
  providers: [
    {
      provide: DecisionMatrixAbstractService,
      useClass: DecisionMatrixService,
    },
  ],
};
