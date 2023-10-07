import Breadcrumbs from '@/components/Breadcrumbs';
import Layout from '@/components/Layout';
import ProductDetailsOverview from '@/components/ProductDetailsOverview';
import RecommendedProducts from '@/components/RecommendedProducts';
import useProduct from '@/hooks/useProduct';
import { Product } from '@/types/Product';
import Head from 'next/head';

export default function Product() {

    const { product } = useProduct();

    return (
        <div>
            <Head>
                <title>Basket | Product</title>
            </Head>

            <Layout>
                <Breadcrumbs />
                {product ? (
                    <>
                        <ProductDetailsOverview product={product} />
                        <RecommendedProducts />
                    </>
                ) : (
                    <div className='p-12 flex min-h-[22rem]'>
                        <span className='m-auto loading loading-ring loading-lg'></span>
                    </div>
                )}
            </Layout>
        </div>
    )
}
