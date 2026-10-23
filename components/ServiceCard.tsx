import Link from "next/link";
import type {ServiceIconKey} from "./ui/Icons";
export default function ServiceCard({title,description,tags,href}:{icon:ServiceIconKey;title:string;description:string;tags:string[];index:number;href?:string}){const body=<><h3>{title}</h3><div><p>{description}</p><ul className="tag-list">{tags.map(t=><li key={t}>{t}</li>)}</ul></div></>;return href?<Link href={href} className="service-row">{body}</Link>:<div className="service-row">{body}</div>}
