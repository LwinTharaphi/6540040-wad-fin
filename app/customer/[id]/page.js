
export default async function Home({ params }) {
    const API_BASE = process.env.NEXT_PUBLIC_API_URL;
  
    const data = await fetch(`${API_BASE}/customer/${params.id}`, { cache: "no-store" });
    const customer = await data.json();
    console.log({ customer: customer});
    // const id = params.id;
    return (
      <div className="m-4">
        <h1>Customer</h1>
        <p className="font-bold text-xl text-blue-800">{customer.name}</p>
        <p>{customer.dob}</p>
        <p>member number {customer.memberno} </p>
        <p>Interests: {customer.interests}</p>
      </div>
    );
  }
  

