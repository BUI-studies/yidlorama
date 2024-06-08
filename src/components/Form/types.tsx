enum Method {
   GET = 'GET',
   POST = 'POST',
   PUT = 'PUT',
   DELETE = 'DELETE'

}

type InputsProps = {
   type: string;
   placeHolder: string;
   name: string;
}

export type FormProps = {
   title: string;
   action: string;
   method: Method;
   inputs: InputsProps[];
}