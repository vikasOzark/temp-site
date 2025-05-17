import { Button } from "@/components/ui/button";

const TryItNowSection = () => {
    return (
        <section className="py-20 px-4 md:px-8 bg-slate-50 ">
            <div className="max-w-7xl mx-auto bg-blue-100/35 rounded-2xl overflow-hidden p-8 relative">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-blue-700 font-bold text-lg uppercase tracking-wide mb-4">
                            TRY IT NOW
                        </h2>

                        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
                            Ready to level up your Machine learning development?
                        </h3>

                        <Button
                            variant="primary"
                            size="lg"
                            className="bg-blue-700 hover:bg-blue-800 px-8 py-6 text-lg font-semibold"
                        >
                            Book a demo
                        </Button>
                    </div>

                    <div className="w-full md:w-1/2 mt-8 md:mt-0 absolute -right-20 top-10 ">
                        <div className="bg-white rounded-xl shadow-lg border-gray-100 p-6">
                            <img
                                src="/footer-img.png"
                                alt="AgentCORE demo interface"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TryItNowSection;
