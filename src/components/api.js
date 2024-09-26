async function getProducts() {
  const request = await fetch(
    'https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}'
  );

  const response = await request.json();

  const allProducts = response.data.products.edges;

  let products = [];

  allProducts.forEach((productNode) => {
    const product = productNode.node;

    const id = product.id;
    const title = product.title;
    const description = product.description;
    const imgSrc = product.featuredImage.url;
    const price = Math.round(product.variants.edges[0].node.price.amount);
    const slug = slugify(title);

    const productInfo = {
      id,
      title,
      description,
      imgSrc,
      price,
      slug,
    };

    products.push(productInfo);
  });

  return products;
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // remove non-aplhanumeric characters
    .replace(/\s+/g, '-'); // replace spaces with hyphens
}

export default getProducts;
