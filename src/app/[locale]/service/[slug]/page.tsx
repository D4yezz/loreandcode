import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getServiceItemServer, SERVICE_SLUGS } from "@/utils/services-data";
import Navbar from "@/components/layout/Navbar/navbar";
import Footer from "@/components/layout/Footer/footer";
import ServiceHero from "@/components/section/service-page/hero";
import ServiceGallery from "@/components/section/service-page/gallery";
import ServiceFeaturesTarget from "@/components/section/service-page/features-target";
import ServiceCtaBanner from "@/components/section/service-page/cta-banner";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tItems = await getTranslations("home.services.items");
  const tMetadata = await getTranslations("home.serviceDetail.metadata");
  const service = getServiceItemServer(slug, tItems);

  if (!service) {
    return {
      title: tMetadata("title"),
      description: tMetadata("description"),
    };
  }

  return {
    title: `${service.title} | Lore & Code`,
    description: service.desc,
    openGraph: {
      title: service.title,
      description: service.desc,
      images: service.images[0] ? [{ url: service.images[0] }] : [],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tItems = await getTranslations("home.services.items");
  const tDetail = await getTranslations("home.serviceDetail");
  const service = getServiceItemServer(slug, tItems);

  if (!service) {
    return (
      <main className="bg-white font-sora">
        <div className="border-3 lg:mx-10 mx-4 lg:my-8 my-4 bg-background min-h-screen flex flex-col justify-between">
          <Navbar />
          <div className="flex flex-col items-center justify-center p-8 text-center h-[80vh]">
            <div className="max-w-md w-full bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h1 className="text-3xl font-black uppercase mb-3">
                {tDetail("notFoundTitle")}
              </h1>
              <p className="text-gray-700 font-medium mb-6">
                {tDetail("notFoundDesc")}
              </p>
              <Button
                asChild
                className="bg-main text-black font-bold text-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                <Link href="/">{tDetail("backHome")}</Link>
              </Button>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white font-sora">
      <div className="border-3 lg:mx-10 mx-4 lg:my-8 my-4 bg-background flex flex-col gap-10 lg:gap-14 overflow-hidden">
        <Navbar />
        <ServiceHero service={service} />
        <ServiceGallery service={service} />
        <ServiceFeaturesTarget service={service} />
        <ServiceCtaBanner service={service} />
        <Footer />
      </div>
    </main>
  );
}
