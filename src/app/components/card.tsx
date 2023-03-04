import Image from "next/image";
import { inspect } from "util";
import styles = module

type Props = {
    text: string;
    userType: string;
    name: string;
    imageUrl: string;
    styles?: string;
};

export function Card({ imageUrl, name, userType, text, styles }: Props) {
    return (
        <div className={`px-8 pt-10 pb-9 bg-purple rounded-lg text-white flex flex-col gap-6 text-[1.063rem] md:max-h-[14.625rem] ${styles}`}>
            <div className={"flex gap-6"}>
                <div>
                    <Image className={"rounded-full"} src={imageUrl} alt={"User image"} width={40} height={40}/>
                </div>

                <div className={"leading-4 flex flex-col justify-between"}>
                    <div>{name}</div>
                    <div className={"text-red"}>{userType}</div>
                </div>
            </div>

            <div className={"font-medium tracking-[-0.019rem] leading-[1.375rem]"}>{text}</div>
        </div>
    );
}