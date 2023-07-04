export const CardInfo = ({text,num}) => {
  return (
	<article className="border">
		{text}
		<h3>{num}</h3>
	</article>
  )
}