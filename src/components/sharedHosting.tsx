const SharedHosting = () => {
    return (
        <section className="h-[500px]  flex flex-col justify-center items-center px-5 py-5 hero-pattern">
            <h4 className=" text-white text-3xl mb-10 font-semibold max-w-xs text-center">So what's in Shared Hosting? A whole lot.</h4>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 rounded-xl">
                <div className="card-item card-item-button rounded-l-xl">
                    <div className="text-center">
                        <h5 className=" text-base font-semibold">Starter Package</h5>
                        <span className="text-xs font-normal">Blogging Website</span>
                    </div>
                    <span className="text-xl font-semibold">$3/month</span>
                    <button className=" border-2 rounded border-[#0D2476] max-w-xs w-full h-10 text-[#0D2476] uppercase font-medium text-sm">BUY  Now</button>
                </div>
                <div className="card-item card-item-button">
                    <div className="text-center">
                        <h5 className=" text-base font-semibold">Business Package</h5>
                        <span className="text-xs font-normal">E-commerce Website</span>
                    </div>
                    <span className="text-xl font-semibold">$5/month</span>
                    <button className=" border-2 rounded border-[#0D2476] max-w-xs w-full h-10 text-[#0D2476] uppercase font-medium text-sm">BUY  Now</button>
                </div>
                <div className="card-item card-item-button rounded-r-xl">
                    <div className="text-center">
                        <h5 className=" text-base font-semibold">Advanced Package</h5>
                        <span className="text-xs font-normal">Custome Website</span>
                    </div>
                    <span className="text-xl font-semibold">$10/month</span>
                    <button className=" border-2 rounded border-[#0D2476] max-w-xs w-full h-10 text-[#0D2476] uppercase font-medium text-sm">BUY  Now</button>
                </div>

            </div>
        </section>
    )

}

export default SharedHosting