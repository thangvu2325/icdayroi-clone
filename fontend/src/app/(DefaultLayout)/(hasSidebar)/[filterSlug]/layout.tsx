import { Metadata } from 'next';

type Props = {
  params: { filterSlug: string };
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props;
  // const filter = await fetchProductById(params.productId)
  return {
    title: params.filterSlug,
  };
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
