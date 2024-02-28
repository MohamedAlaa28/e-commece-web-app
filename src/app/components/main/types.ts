export interface ProductAttribute {
    productTitle: string;
    productPrice: number;
    productDescription: string;
    productRating: number;
    productImage: {
        data: Array<{
            id: number | null | undefined;
            attributes: {
                url: string;
            };
        }>;
    };
}

export interface Product {
    id: string;
    attributes: ProductAttribute;
}

export interface ApiResponse {
    data: Product[];
}

export interface ProductDetailsProps {
    selectedProduct: Product;
}