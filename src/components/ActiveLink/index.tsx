import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement, cloneElement } from "react";

//extend Next's Link component props
interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({
  children,
  activeClassName,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter(); //get current route

  const className = asPath === rest.href ? activeClassName : "";

  return (
      //use cloneElement to modify and add props
    <Link {...rest}>
      {cloneElement(children, {
        className, //pass the className to chidren anchor elements
      })}
    </Link>
  );
}
