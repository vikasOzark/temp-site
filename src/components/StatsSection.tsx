import { Zap, Percent } from "lucide-react";
import { Card } from "@/components/ui/card";

const StatsSection = () => {
    return (
        <section className="py-16 px-4 md:px-10 lg:14">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <StatCard
                        value="2x"
                        description="Accelerate development cycle by at least 2x"
                    />

                    <StatCard
                        value="30%"
                        description="Reduce operational costs by at least 30%"
                    />
                </div>

                <div className="bg-mlops-lightBlue rounded-lg p-8 md:p-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Faster time to market
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl max-w-3xl font-bold">
                        Automation and streamlined processes reduce model
                        development and deployment time by half enabling quicker
                        AI solution launches.
                    </p>
                </div>
            </div>
        </section>
    );
};

const StatCard = ({
    value,
    description,
    icon,
}: {
    value: string;
    description: string;
    icon?: React.ReactNode;
}) => {
    return (
        <Card className="bg-mlops-lightBlue border-none p-8 px-14 md:p-10">
            <h3 className="text-6xl md:text-5xl font-bold mb-4 text-gray-900">
                {value}
            </h3>
            <p className="text-gray-700 text-2xl font-bold">{description}</p>
        </Card>
    );
};

export default StatsSection;
