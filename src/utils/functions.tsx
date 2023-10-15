export function createLink(text: string, href: string) {
  if (href === '#')
    return <span className='font-semibold text-red-700 line-through	'>
      {text}
    </span>
  else return <a
    className='font-semibold text-blue-700 '
    href={href}
    target='_blank'
    rel="noreferrer"
  >
    {text}
  </a>
}