import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";

export const counterEventActions = createActionGroup(
  {
    source: 'Counter Component',
    events: {
      increment: emptyProps(),
      decrement: emptyProps(),
      reset: emptyProps(),
      countBySet: props<{by: number}>(),
    }
  }
);
