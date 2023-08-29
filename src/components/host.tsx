const Host = () => {
    return (
        <section className="flex flex-col px-5 justify-center items-center text-center h-full py-10 w-full">
            <span className="font-semibold text-base text-[#111111]">Hostingor</span>
            <h2 className="text-3xl  lg:text-5xl font-bold text-[#111111] my-8">Hostingor From Another World</h2>
            <p className=" sm:max-w-sm lg:max-w-xl font-normal text-base text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis dolor. Maecenas quam nunc, tincidunt quis facilisis ut, faucibus eget </p>
            <img src='/Bitmap.svg' alt='img' />
            <div className="grid sm:grid-cols-1  lg:grid-cols-2  gap-x-10 p-10 max-w-7xl">
                <ul className="list-none">
                    <li className="mb-10">
                        <div className="flex flex-row space-x-2 bg-slate-300">
                            <img src="check-mark.svg" alt='icon' />
                            <span className="font-bold text-base">Website Builder</span>
                        </div>
                    </li>
                    <li className="mb-10">
                        <div className="flex flex-row space-x-2">
                            <img src="check-mark.svg" alt='icon' />
                            <span className="font-bold text-base">WP Accelerator</span>
                        </div>
                    </li>
                    <li className="mb-10">
                        <div className="flex flex-row space-x-2">
                            <img src="check-mark.svg" alt='icon' />
                            <span className="font-bold text-base">DDoS and Malware</span>
                        </div>
                    </li>
                </ul>
                <ul className="list-none">
                    <li className="mb-10">
                        <div className="flex flex-row space-x-2">
                            <img src="check-mark.svg" alt='icon' />
                            <span className="font-bold text-base">Free Domain and SSL</span>
                        </div>
                    </li>
                    <li className="mb-10">
                        <div className="flex flex-row space-x-2">
                            <img src="check-mark.svg" alt='icon' />
                            <span className="font-bold text-base">Auto Installer</span>
                        </div>
                    </li>
                    <li className="mb-10">
                        <div className="flex flex-row space-x-2">
                            <img src="check-mark.svg" alt='icon' />
                            <span className="font-bold text-base">24/7 Support</span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )

}


export default Host