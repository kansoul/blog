import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getCategories } from "@/services/category";

export default async function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();
  return (
    <>
      <Header categories={categories} />
      {children}
      <Footer categories={categories} />
    </>
  );
}
