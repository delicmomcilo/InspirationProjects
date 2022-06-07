export type Errors = {
  seniorityChecked?: { message: string };
  bindingContractChecked?: { message: string };
};

export type Payload = {
  errors?: Errors
}
