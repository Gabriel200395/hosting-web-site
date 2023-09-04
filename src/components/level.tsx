const Level = () => {
    return (
        <section className="h-full flex justify-center items-center bg-[#E5E5E5] py-10 px-5">
            <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-5 max-w-7xl px-5">
                <div className="rounded-md flex justify-center space-x-2 flex-row items-center py-5 px-4">
                    <h4 className="text-2xl text-[#002348] max-w-xs font-bold">Level Up your web hosting with these must-have.</h4>
                </div>
                <div className="rounded-md flex justify-center space-x-2 flex-row items-center py-5 bg-white px-4">
                    <img src='/settings.svg' alt='settings' width="100" />
                    <div>
                        <h3 className="text-[#002348] font-semibold text-base mb-2">Data Safety</h3>
                        <p className="text-xs max-w-[220px] font-normal text-[#002348]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis dolor.</p>
                    </div>
                </div>

                <div className="rounded-md flex justify-center space-x-2 flex-row items-center py-5 bg-white px-4">
                    <img src='/seo.svg' alt='seo' width="100" />
                    <div>
                        <h3 className="text-[#002348] font-semibold text-base mb-2">Added Security</h3>
                        <p className="text-xs max-w-[220px] font-normal text-[#002348]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis dolor.</p>
                    </div>
                </div>
                <div className="rounded-md flex justify-center space-x-5 flex-row items-center py-5 bg-white px-4">
                    <img src='/sll.svg' alt='sll' />
                    <div>
                        <h3 className="text-[#002348] font-semibold text-base mb-2 ">SEO Tools</h3>
                        <p className="text-xs max-w-[220px] font-normal text-[#002348]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis dolor.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Level