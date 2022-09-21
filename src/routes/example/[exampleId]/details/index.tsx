import { component$, Resource } from "@builder.io/qwik";
import { RequestHandler, useEndpoint } from "@builder.io/qwik-city";

interface ProductData {
  exampleId: string;
  exampleName: string;
  examplePrice: number;
  exampleDescription: string
}

type myProduct = {
  name: string,
  id: string,
  price: number,
  description: string
}

export const onGet: RequestHandler<ProductData> = async ({ params }) => {
  // put your DB access here, we are hard coding a response for simplicity.

  const SingleProduct: myProduct = {
    name: 'Tea',
    id: 'tea',
    price: 100,
    description: 'any'
  }

  return {
    exampleId: params.exampleId,
    exampleName: SingleProduct.name,
    examplePrice: SingleProduct.price,
    exampleDescription: SingleProduct.description
  }
}

export default component$(() => {
  const exampleData = useEndpoint<ProductData>()
  
  return (
    <div>
      <Resource 
        value={exampleData}
        onPending={() => <div>Loading.....</div>}
        onRejected={() => <div>Error!</div>}
        onResolved={(product) => (
          <>
            <h1>Product: {product.exampleName}</h1>
            <p>Produc ID: {product.exampleId}</p>
            <p>Product Price: {product.examplePrice}</p>
            <p>Product Description: {product.exampleDescription}</p>
          </>
        )}
      /> 
    </div>
  );
});