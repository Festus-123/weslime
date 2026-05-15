const Hero = () => {
    return (
        <div
            style={{
                backgroundImage: "url(/bg.png)"
            }}
            className="bg-cover bg-no-repeat bg-center h-screen mx-auto ">
            
            <div
                className="bg-linear-to-r from-black/80 to-black/10 w-full h-full flex flex-col items-start justify-center p-4 sm:p-8 md:p-16 gap-6">
                    <h1 className="text-3xl md:text-6xl text-white font-semibold tracking-wider leading-none mt-10">
                        <span className="italic text-white/80">Weslime for </span> <br />
                        <span className="font-extrabold">Auto Repair</span>
                    </h1>
                    <p className="text-xs sm:text-sm text-white max-w-2xl font-extralight tracking-wide">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quam temporibus provident veniam quia expedita! Dolore delectus vitae debitis optio fuga architecto, cum ipsum repellat, ea eum assumenda, corrupti cupiditate.
                    </p>
                    <div className="flex items-center gap-4 mt-10 w-full max-w-xl">
                        <button className="grow bg-blue-500 p-2 rounded-full text-white">
                            Visit services
                        </button>
                        <button className="grow border border-white p-2 rounded-full text-white">
                            Make Repairs
                        </button>
                    </div>
            </div>
        </div>
    );
}

export default Hero;