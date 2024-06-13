import clsx from "clsx";

export default function Video (props) {
    return (
        <article className={clsx("video-card flex flex-col gap-4",{
             //special : props.channel === "Marquez Brownlee"
             "special red": props.channel === "Marquez Brownlee"
             })}>
            <img className="w-full rounded-[10px] object-cover" src={props.image} alt="" />
            <footer className="grid gap-2 grid-cols-[2rem_1fr]">
                <img className="col-start-1 col-end-2 w-8 h-8 rounded-[50%]" src={`https://api.dicebear.com/8.x/identicon/svg?seed=${props.channel}` } alt="" />
                <p className="col-start-2 col-end-3">
                    {props.title}
                </p>
                
                <p className="col-start-2 col-end-3">
                    {props.channel}
                </p>
            </footer>
        </article>
        )
}