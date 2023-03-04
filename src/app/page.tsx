import { League_Spartan } from 'next/font/google';
import { Rating } from "@/app/components/rating";
import { Card } from "@/app/components/card";

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

export default function Home() {
    return (
        <main className={`${leagueSpartan.className} w-full grid md:grid-rows-2 md:grid-cols-2 place-items-center pt-20 pb-24 max-w-[69.375rem] mx-auto md:gap-x-32 md:gap-y-[4.438rem]`}>
            <header className={"text-center max-w-[27.813rem] md:text-left"}>
                <h1 className={"text-4xl md:text-6xl text-purple font-bold md:tracking-[-0.125rem] leading-[2rem] md:leading-[3rem]"}>10,000+ of our users love our products.</h1>

                <h2 className={"text-purpleLight text-xl md:text-[1.188rem] tracking-[-0.04rem] mt-4 font-medium"}>We only provide great
                    products combined with excellent customer service. See what our satisfied customers are saying about
                    our services.</h2>
            </header>

            <section className={"flex flex-col gap-4 w-full mt-10 mb-12"}>
                <Rating text={"Rated 5 Stars in Reviews"}/>
                <Rating text={"Rated 5 Stars in Report Guru"} styles={"md:ml-[3rem]"}/>
                <Rating text={"Rated 5 Stars in BestTech"} styles={"md:ml-[6rem]"}/>
            </section>

            <section className={"flex flex-col md:flex-row gap-4 md:gap-8 w-full md:col-span-2 md:items-start"}>
                <Card
                    text={"“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”"}
                    name={"Colton Smith"}
                    userType={"Verified Buyer"}
                    imageUrl={"/images/image-colton.jpg"}
                />
                <Card
                    text={"“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”"}
                    name={"Irene Roberts"}
                    userType={"Verified Buyer"}
                    imageUrl={"/images/image-irene.jpg"}
                    styles={"md:mt-[1rem]"}
                />
                <Card
                    text={"“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”"}
                    name={"Anne Wallace"}
                    userType={"Verified Buyer"}
                    imageUrl={"/images/image-anne.jpg"}
                    styles={"md:mt-[2rem]"}
                />
            </section>
        </main>
    )
}
