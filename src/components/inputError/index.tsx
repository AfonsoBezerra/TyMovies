import { SpanStyle } from './style';

interface iInputError {
  children: React.ReactNode;
}
const InputError = ({ children }: iInputError) => {
  return <SpanStyle>{children}</SpanStyle>;
};

export default InputError;
