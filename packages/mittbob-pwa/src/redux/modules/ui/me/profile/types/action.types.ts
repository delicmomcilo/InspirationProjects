import validate from 'src/validate';

export type SetErrors = { errors: ReturnType<typeof validate> };
export type SetEdit = { edit: boolean };
