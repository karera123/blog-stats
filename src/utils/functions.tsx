export function createLink(text: string, href: string) {
  return <a className="text-blue-700 font-bold" href={href} target='_blank' rel="noreferrer">{text}</a>
}