import HookCard from "./HookCard"

const hooks = [
    {
        type: "Curiosity",
        hook: "This AI trick can double your views overnight",
    },
    {
        type: "Authority",
        hook: "Top creators are secretly using this strategy",
    },
    {
        type: "Storytelling",
        hook: "I tried AI content for 30 days and this happened",
    },
]

const HookList = () => {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {hooks.map((item) => (

                <HookCard
                    key={item.hook}
                    type={item.type}
                    hook={item.hook}
                />

            ))}

        </div>
    )
}

export default HookList
