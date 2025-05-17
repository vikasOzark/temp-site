import {
    Settings,
    Database,
    Layers,
    FlaskConical,
    Rocket,
    BarChart3,
    Users,
    Folders,
    ClipboardList,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const KeyFeaturesSection = () => {
    const features = [
        {
            id: 1,
            title: "Infrastructure setup",
            description:
                "Seamless infrastructure setup for development, whether on the user's own cloud or on-premises.",
        },
        {
            id: 2,
            title: "Data Management",
            description:
                "Handling the entire data lifecycle, from data ingestion to storage, processing, versioning, and monitoring.",
        },
        {
            id: 3,
            title: "Model Development",
            description:
                "Supports machine learning workflows with consistent and reliable development environments.",
        },
        {
            id: 4,
            title: "Experiment Management",
            description:
                "Centralized tracking of experiments, including hyperparameters, metrics, & model versions.",
        },
        {
            id: 5,
            title: "Model Deployments",
            description:
                "One-click model deployment to production or test environments with minimal setup.",
        },
        {
            id: 6,
            title: "Monitoring & Observability",
            description:
                "Real time monitoring helps teams quickly identify and address potential issues in production.",
        },
        {
            id: 7,
            title: "User Roles & Permissions",
            description:
                "Secure access by roles, ensuring team members access only the resources they need.",
        },
        {
            id: 8,
            title: "Project Management",
            description:
                "Allow admin and project manager to create the projects with timelines to completion.",
        },
        {
            id: 9,
            title: "Audit Trails",
            description:
                "For model changes, deployments & experiments, helping with compliance requirements.",
        },
    ];

    return (
        <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-blue-700 to-blue-800">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10">
                    <h2 className="text-white font-bold text-lg uppercase tracking-wide mb-4">
                        KEY FEATURES
                    </h2>

                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">
                        For everyone in the team
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.id}
                            id={feature.id}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({
    id,
    title,
    description,
    icon,
}: {
    id: number;
    title: string;
    description: string;
    icon?: React.ReactNode;
}) => {
    return (
        <Card className="bg-blue-600/80 border-none p-6 text-white hover:bg-blue-600 transition-colors duration-200">
            <div className="mb-4 text-5xl font-bold text-white ">{id}</div>
            <div className="mb-4">{icon}</div>
            <h4 className="text-xl font-semibold mb-3">{title}</h4>
            <p className="text-white/80">{description}</p>
        </Card>
    );
};

export default KeyFeaturesSection;
