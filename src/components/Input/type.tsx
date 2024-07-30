export enum INPUT_TYPE {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
  NUMBER = 'number',
  DATE = 'date',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  FILE = 'file',
  SUBMIT = 'submit',
  RESET = 'reset',
  BUTTON = 'button',
  SELECT = 'select'
}

export type SelectOption = {
  label: string;
  value: string;
}

export type InputElementProps = {
  id: string;
  type: INPUT_TYPE;
  placeHolder?: string;
  name: string;
  required?: boolean | undefined;
  options?: SelectOption[];
  onChange?: () => void;
  value?: string;
  label?: string;
}