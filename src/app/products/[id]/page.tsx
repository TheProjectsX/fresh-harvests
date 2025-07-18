import ProductDesc from "./ProductDesc";

const SingleProduct = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const productId = (await params).id;

    let productData = {
        id: "67514a611cdb919fe028cf09",
        productName: "Banana",
        description:
            "Bananas are elongated, yellow fruits with a sweet, creamy flesh, commonly eaten fresh or used in smoothies, desserts, and baked goods. They are rich in nutrients like potassium, vitamin C, and dietary fiber, making them a popular and healthy snack worldwide.",
        price: 20.99,
        stock: 50,
        images: ["https://i.ibb.co.com/cyCs2B7/banana.jpg"],
        categoryId: "6751516f9c52879c1fde6558",
        isDeleted: false,
        createdAt: "2024-12-05T06:38:25.687Z",
        updatedAt: "2024-12-05T06:38:25.687Z",
    };
    let categoryData = {
        id: "6751516f9c52879c1fde6558",
        categoryName: "fruits",
        createdAt: "2024-12-05T07:08:31.499Z",
        updatedAt: "2024-12-05T07:08:31.499Z",
    };

    // TODO :: QUANTITY FUNC
    // try {
    // } catch (error) {}

    return (
        <ProductDesc productData={productData} categoryData={categoryData} />
    );
};

export default SingleProduct;
