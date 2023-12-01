export const getData = async <T>(url:string): Promise<T> => {
	const response = await fetch(process.env.API_URL +'/api/v1'+ url,{
		next: {
			revalidate: 300
		}
	});

	if(!response.ok) {
		throw new Error('Failed to fetch data');
	}

	return response.json()
}