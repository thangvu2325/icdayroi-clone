import axios from 'axios';
import { Metadata } from 'next';

type Props = {
  params: { filterSlug: string };
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props;
  const filter = await axios.get(`http://localhost:3001/api/listFilters/${params.filterSlug}`, {
    withCredentials: true,
  });
  return {
    title: filter.data.title,
  };
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
