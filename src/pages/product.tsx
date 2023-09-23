import Layout from '@/components/Layout';
import Head from 'next/head';

export default function Product() {
    return (
        <div>
            <Head>
                <title>Next Ecommerce</title>
            </Head>

            <Layout>
                <p>This is the product page</p>
            </Layout>
        </div>
    )
}
