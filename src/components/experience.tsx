const Experience = () => {
    return (
        <section className="bg-gradient-to-l  from-blue-600 to-[#582AF7] h-full w-full py-10 flex justify-center flex-col items-center px-5">
            <h2 className="text-2xl max-w-md text-center font-bold text-white mb-5">Have you ever experienced problems in managing a website?</h2>
            <p className="text-white text-base text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl">
                <div className=" rounded-lg bg-white flex flex-col justify-center items-center py-10 px-5">
                    <img src="/Snail-icon.svg" alt="img" className="mb-5" />
                    <h4 className="font-semibold  text-lg text-[#002348] mb-2">Late Response</h4>
                    <p className="text-base leading-8 text-[#002348] font-normal text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis dolor. Maecenas quam nunc, tincidunt quis facilisis ut.</p>
                </div>
                <div className=" rounded-lg bg-white flex flex-col justify-center items-center py-10 px-5">
                    <img src="/Old-Technology.svg" alt="img" className="mb-5" />
                    <h4 className="font-semibold  text-lg text-[#002348] mb-2">Using Old Technologies</h4>
                    <p className="text-base leading-8 text-[#002348] font-normal text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis dolor. Maecenas quam nunc, tincidunt quis facilisis ut.</p>
                </div>
                <div className=" rounded-lg bg-white flex flex-col justify-center items-center py-10 px-5">
                    <img src="/Price-icon.svg" alt="img" className="mb-5" />
                    <h4 className="font-semibold  text-lg text-[#002348] mb-2">High Price</h4>
                    <p className="text-base leading-8 text-[#002348] font-normal text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis dolor. Maecenas quam nunc, tincidunt quis facilisis ut.</p>
                </div>
            </div>

        </section>
    )
}

export default Experience