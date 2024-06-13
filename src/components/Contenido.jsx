import Categories from "./Categories";
import Video from "./Video";

export default function content () {
    const videos = [
        {
            image: 'https://i.ytimg.com/vi/qkYoBNdcXBU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D&rs=AOn4CLBMqLZTrZGyOfAutjm8zbjaIUdwtA', 
            title: 'Alquimia en la era moderna', 
            channel:'Marquez Brownlee'
        },
        {
            image: 'https://i.ytimg.com/vi/LXEBvVYSKuk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTYN3zS08PhOou3vS43afqAWVmhA', 
            title: 'Speed run', 
            channel:'Levelup'
        },
        {
            image: 'https://i.ytimg.com/vi/6PrURUM4ng0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D&rs=AOn4CLDwGnSCzCzuBRo4DC-i8PJI14VJCg', 
            title: 'Inversiones desde el extranjero', 
            channel:'Eduardo Rosas'
        },
        {
            image: 'https://i.ytimg.com/vi/dLw1ao4-Akk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCD9H130iyuyAa3ysZJtOkzfExemw', 
            title: 'Errores de un programador', 
            channel:'todocode'
        },
        {
            image: 'https://i.ytimg.com/vi/F07sHa6Z7EI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJ_GHVKSpQACfsMGvmuD7ggTodvQ', 
            title: 'Alquimia en la era moderna', 
            channel:'Marquez Brownlee'
        },
    ];
    
    return (
        <section className="column-start-2 column-end-3 row-start-2 row-end-3">
            <Categories />
            <section className="grid grid-cols-4 gap-4 pt-4">
                {
                    videos.map((video) => {
                        return (<Video 
                            key = {`video-${video.title}`} 
                            image={video.image}
                            title={video.title}
                            channel={video.channel}
                            />);
                    })}
            </section>
        </section>
    );
}