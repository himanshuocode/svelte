import { fetchProducts } from "../../graphql/client";
import { fetchCategories } from '../../graphql/client';

export async function load({ url, fetch, params }:any) {
    console.log(params.categoryUID,'params')

let categories = [];

    console.log(url?.searchParams?.get('category'))
    categories = await  fetchCategories();
		console.log(categories,'categories')
        const categoryId = params.categoryUID
        // const categoryId = url?.searchParams?.get('category') || null;
    // const categoryId = url?.searchParams?.get('category') || null;
    console.log(categoryId,'path')

    let products = [];
    if (categoryId) {
        try {
            const response = await fetchProducts(categoryId);
            products = response.data.products.items;
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    }

    return {
        categoryId,
        products
    };
}

export const prerender = true;
