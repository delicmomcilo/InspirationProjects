import { PreemptionId } from 'src/redux/modules/preemption/types';

export interface IProps  {
  id?: PreemptionId;
  loading?: boolean;
  expanded?: boolean;
  hideActionButton?: boolean;
}

