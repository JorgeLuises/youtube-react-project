export default function Categories () {
    const categories = ["All", "Music", "Sports", "Video Games", "Live style", "Gamming", "Code", "Programing"];
    return (
        <div className="flex flex-row gap-4">
            {categories.map((category) => {
                return ( <span className="p-[0.5rem_1rem] rounded-[20px] bg-[#282828]">{category}</span> );
            })}
        </div>
    );
};