import * as types from '.';

interface BuildingType {
  id: string;
  type: string;
}

interface Area {
  areaName: string;
  subAreas: Array<{
    id: number;
    areaName: string;
  }>;
}

export type Preemptions = { json: Array<types.Preemption> };
export type Preemption = { json: types.Preemption };
export type Interests = { json: Array<types.Interest> };
export type Filters = [{ json: Array<BuildingType> }, { json: Array<Area> }];
