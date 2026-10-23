import Link from "next/link";
import type { ReactNode } from "react";
type Variant="primary"|"secondary"|"ghost";type Size="sm"|"md"|"lg";
interface Props{children:ReactNode;variant?:Variant;size?:Size;href?:string;type?:"button"|"submit";disabled?:boolean;icon?:ReactNode;onClick?:()=>void;className?:string}
export default function Button({children,variant="primary",size="md",href,type="button",disabled=false,onClick,className=""}:Props){const cls=`button button-${variant} button-${size} ${className}`;if(href)return <Link href={href} className={cls} onClick={onClick} aria-disabled={disabled||undefined}>{children}</Link>;return <button type={type} className={cls} onClick={onClick} disabled={disabled}>{children}</button>}
