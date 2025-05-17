import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="pt-32 pb-20 px-4 md:px-8 bg-gray-100">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                    Integrated all-in-one platform for
                    <br />
                    every aspect of MLOps
                </h1>

                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                    Accelerating organizations in their AI product development
                    journey through end-to-end integration, automation, and
                    collaboration.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button
                        size="lg"
                        className="bg-mlops-blue hover:bg-blue-700 text-white px-8 py-6 rounded-md font-medium text-lg"
                    >
                        Book a demo
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        className="border-mlops-blue text-mlops-blue hover:bg-blue-50 px-8 py-6 rounded-md font-medium text-lg"
                    >
                        <Play className="w-5 h-5 mr-2" /> Watch video
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
