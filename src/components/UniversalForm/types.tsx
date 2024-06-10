export enum Method {
   GET = 'GET',
   POST = 'POST',
   PUT = 'PUT',
   DELETE = 'DELETE'
}

export enum InputType {
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

export type InputsProps = {
   id: string;
   type: InputType;
   placeHolder: string;
   name: string;
}

export type FormProps = {
   title: string;
   action: string;
   method: Method;
   inputs: InputsProps[];
   button: 
      {
         text: string;
         clickHandler: () => void;
      },
}