import { InputElementProps } from '../Input/type';

export enum METHOD {
   POST = 'post',
   PUT = 'put',
   DELETE = 'delete'
}

export type FormProps = {
   title: string;
   action: string;
   method: METHOD;
   inputs: InputElementProps[];
   submitNavigation?: string;
   button: 
      {
         text: string;
         clickHandler: () => void;
      },
}