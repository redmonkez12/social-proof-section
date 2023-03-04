import Image from "next/image";

type Props = {
    text: string;
    styles?: string;
};

export function Rating({ text, styles = ""}: Props) {
    return (
        <div className={`bg-pinkLight py-4 md:py-5 w-full rounded-lg flex flex-col md:flex-row md:px-8 items-center gap-4 max-w-[27.813rem] ${styles}`}>
            <div className={"flex gap-2 h-[1rem]"}>
                <Image src={"/images/icon-star.svg"} alt={"Star icon"} width={17} height={17} />
                <Image src={"/images/icon-star.svg"} alt={"Star icon"} width={17} height={17}/>
                <Image src={"/images/icon-star.svg"} alt={"Star icon"} width={17} height={17}/>
                <Image src={"/images/icon-star.svg"} alt={"Star icon"} width={17} height={17}/>
                <Image src={"/images/icon-star.svg"} alt={"Star icon"} width={17} height={17}/>
            </div>

            <div className={"text-purple font-bold text-lg"}>{text}</div>
        </div>
    );
}