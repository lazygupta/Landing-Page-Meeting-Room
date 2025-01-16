


const HeroButtons = ({ label, icons }: any) => {
    return (
        <div className=" flex justify-between m-2 p-2 hover:bg-gray-400  rounded-lg">
            <div className=" hidden sm:block">
                {label}
            </div>
            {icons}
        </div>
    )
}

export default HeroButtons