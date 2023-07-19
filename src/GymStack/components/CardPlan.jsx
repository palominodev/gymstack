export const CardPlan = ({price,name='Plan Name',beneficios=[]}) => {
  return (
	<article 
		className="flex flex-col sm:flex-row justify-center items-center border rounded-md p-4 bg-slate-600">
		<p className="text-3xl text-center mb-2">{name}</p>
		<p className="text-3xl text-center mb-4" >
			<span className="text-7xl font-bold">{price}</span> soles
		</p>
		<ul className="w-2/3">
			{
				beneficios.map(benef => (
					<li key={benef} className="p-1" >{benef}</li>
				))
			}
		</ul>
	</article>
  )
}	