import Navbar from "@/app/components/navbar";
import {client} from "@/app/lib/sanity";
import {Product} from "@/app/lib/interface";

async function getData(){
    const query="*[_type == 'product']";
    const data= await client.fetch(query);
    console.log(data)
    return data;
}
export default async function Home() {
    const data = (await getData()) as Product[];
  return (
    <div className="w-8/12 mx-auto">
        <Navbar/>
        <br/>
      <div className=''>
          <hr/>
        <h1 className='text-center p-5 font-bold text-4xl'>Home</h1>
          <hr/>
          <p className=' px-4 py-2 mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto asperiores autem, consequatur cum cupiditate dolores dolorum eaque eum hic inventore sapiente, totam unde vitae voluptatum? Laboriosam libero necessitatibus quisquam!</p>
          <p className=' px-4 py-2 mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto asperiores autem, consequatur cum cupiditate dolores dolorum eaque eum hic inventore sapiente, totam unde vitae voluptatum? Laboriosam libero necessitatibus quisquam!</p>
          <div className='flex flex-col'>

              {data.map((product:any)=>(
                  <div key={product._id} className='bg-amber-100 my-10 py-2 w-full px-4'>{product.name} - {product.price}</div>
              ))}
          </div>
      </div>
    </div>
  )
}
