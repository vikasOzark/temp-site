import { Users, Repeat, GitPullRequest } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyAgentCoreSection = () => {
    return (
        <section className="py-16 px-4 md:px-8 bg-gray-100 ">
            <div className="max-w-7xl mx-auto bg-white rounded-2xl w-9/10 p-10">
                <div className="mb-10">
                    <h2 className="text-mlops-blue font-bold text-lg uppercase tracking-wide mb-4">
                        WHY AGENTCORE
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Seamless collaboration among data scientists,
                            engineers, and project managers.
                        </h3>
                        <p className="text-gray-600 text-lg">
                            It is designed to provide a comprehensive solution
                            for managing the entire machine learning lifecycle,
                            from data ingestion and model development to
                            deployment and monitoring.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<Users className="h-10 w-10 text-mlops-blue" />}
                        title="Unified view for all stakeholders"
                        description="Our platform offers a comprehensive, user-friendly dashboard that provides managers, data scientists, and engineers with a unified view of all machine learning projects."
                    />

                    <FeatureCard
                        icon={<Repeat className="h-10 w-10 text-mlops-blue" />}
                        title="End-to-end integration"
                        description="Unlike many competitors that focus on specific stages of the ML lifecycle, our platform offers an end-to-end solution covering all stages within a single interface."
                    />

                    <FeatureCard
                        icon={
                            <GitPullRequest className="h-10 w-10 text-mlops-blue" />
                        }
                        title="Automated CI/CD for ML"
                        description="Built-in CI/CD pipelines streamline model versioning and deployment processes, enabling fast and reliable updates."
                    />
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) => {
    return (
        <Card className="border-none shadow-none">
            <CardContent className="p-0">
                <div className="mb-6">{icon}</div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900">
                    {title}
                </h4>
                <p className="text-gray-600">{description}</p>
            </CardContent>
        </Card>
    );
};

export default WhyAgentCoreSection;
