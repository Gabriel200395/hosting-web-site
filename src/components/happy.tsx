const Happy = () => {
    return (
        <section className="h-full w-full py-10 flex justify-center items-start bg-[#582AF7]">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-7xl px-5">
                <div className="flex justify-center lg:justify-start md:justify-start lg:mb-0 md:mb-0 mb-10">
                    <img src="/illustration-Hosting.svg" alt="img" />
                </div>
                <div className="flex flex-col justify-center items-center lg:items-start md:items-start">
                    <h2 className="font-bold text-4xl max-w-sm text-white mb-10 text-center lg:text-start md:text-start">One-click installs so you can build happy.</h2>
                    <p className="text-sm text-white font-normal max-w-sm text-center lg:text-start md:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis dolor. Maecenas quam nunc, tincidunt.</p>
                </div>
            </div>
        </section>
    )

}

export default Happy