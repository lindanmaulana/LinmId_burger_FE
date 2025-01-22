import { ReactNode } from "react";

const ErrorFieldMessage = (props: { children: ReactNode }) => {
  return <span className="text-xs text-red-500">{props.children}</span>;
};

export default ErrorFieldMessage;
