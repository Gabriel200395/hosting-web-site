const MoneyBack = () => {
    return (
        <section className="bg-[#F2F5FF] py-10 w-full flex justify-center">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 max-w-4xl">
                <div className="flex justify-center mb-10 lg:mb-0 md:mb-0">
                    <img src="/money.svg" alt="money" />
                </div>
                <div className="flex flex-col justify-center items-center md:items-start lg:items-start">
                    <h4 className=" text-[#111111] font-bold text-lg lg:text-2xl md:text-2xl md:text-start text-center mb-5">30 Days Money-Back Guarantee</h4>
                    <p className="text-xs text-[#2B324C] font-normal max-w-xl mb-5 lg:text-start text-center md:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis dolor. Maecenas quam nunc, tincidunt quis facilisis ut, faucibus eget </p>
                    <button className="bg-[#EF7F3C] h-10  w-[150px] text-white font-medium text-base rounded-md uppercase">Buy Now</button>
                </div>
            </div>
        </section>
    )
}

export default MoneyBack