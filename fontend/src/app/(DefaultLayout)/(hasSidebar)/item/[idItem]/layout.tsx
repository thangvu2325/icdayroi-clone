import axios from 'axios';
import { Metadata } from 'next';

type Props = {
  params: { idItem: string };
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props;
  const item = await axios.get(`http://localhost:3001/api/item/${params.idItem}`, {
    withCredentials: true,
  });
  return {
    title: item?.data?.name,
  };
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
