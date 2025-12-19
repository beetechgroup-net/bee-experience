
import { IconType } from 'react-icons';
import {
    SiReact, SiTypescript, SiNextdotjs, SiNodedotjs, SiNestjs, SiPostgresql,
    SiMongodb, SiRedis, SiDocker, SiKubernetes, SiAmazon, SiGithubactions,
    SiVuedotjs, SiTailwindcss, SiStorybook, SiJest, SiCypress, SiGraphql,
    SiApollographql, SiReactrouter, SiExpo, SiFirebase, SiRedux, SiFastlane,
    SiPython, SiExpress, SiRabbitmq, SiNginx, SiPhp, SiLaravel, SiWordpress,
    SiMysql, SiJquery, SiBootstrap, SiStripe, SiHtml5, SiCss3, SiJavascript,
    SiSass, SiGit, SiTerraform, SiAnsible, SiPrometheus,
    SiGrafana, SiDjango, SiFlask, SiPandas, SiNumpy, SiFastapi, SiCelery,
    SiSpringboot, SiSpring, SiHibernate, SiApachemaven, SiOracle, SiDotnet,
    SiSharp, SiRuby, SiRubyonrails, SiGo, SiRust, SiWebassembly, SiFlutter,
    SiDart, SiSwift, SiKotlin, SiAndroid, SiAngular, SiSvelte,
    SiSolidity, SiEthereum, SiUnity, SiSelenium, SiApachespark, SiApachekafka,
    SiApacheairflow, SiSnowflake, SiTensorflow, SiPytorch, SiScikitlearn,
    SiOwasp, SiBurpsuite, SiShopify, SiWebrtc, SiTwilio, SiSocketdotio
} from 'react-icons/si';
import { FaCode, FaDatabase, FaMobileAlt, FaServer, FaCloud, FaGamepad } from 'react-icons/fa';

interface TechIconProps {
    name: string;
    className?: string;
    showTooltip?: boolean;
}

const iconMap: Record<string, IconType> = {
    // Frontend
    'React': SiReact,
    'React Native': SiReact,
    'TypeScript': SiTypescript,
    'Next.js': SiNextdotjs,
    'Vue.js': SiVuedotjs,
    'Vue 3': SiVuedotjs,
    'Tailwind CSS': SiTailwindcss,
    'Storybook': SiStorybook,
    'Jest': SiJest,
    'Cypress': SiCypress,
    'Apollo Client': SiApollographql,
    'Redux': SiRedux,
    'HTML5': SiHtml5,
    'CSS3': SiCss3,
    'JavaScript': SiJavascript,
    'SASS': SiSass,
    'Angular': SiAngular,
    'RxJS': SiReact, // Fallback/Alternative or remove if unused. Let's use SiReact for now or remove. Actually SiRxjs was missing. I'll remove it from imports if not found, or use fallback.
    'Svelte': SiSvelte,
    'SvelteKit': SiSvelte,
    'Bootstrap': SiBootstrap,
    'jQuery': SiJquery,
    'WebAssembly': SiWebassembly,

    // Backend
    'Node.js': SiNodedotjs,
    'NestJS': SiNestjs,
    'GraphQL': SiGraphql,
    'Express': SiExpress,
    'Python': SiPython,
    'Django': SiDjango,
    'Flask': SiFlask,
    'FastAPI': SiFastapi,
    'PHP': SiPhp,
    'Laravel': SiLaravel,
    'WordPress': SiWordpress,
    'Ruby': SiRuby,
    'Ruby on Rails': SiRubyonrails,
    'Go': SiGo,
    'Gin': SiGo, // Fallback
    'Rust': SiRust,
    'Java': FaServer, // Generic Java
    'Spring Boot': SiSpringboot,
    'Spring MVC': SiSpring,
    'C#': SiSharp,
    '.NET Core': SiDotnet,
    'ASP.NET': SiDotnet,
    'Solidity': SiSolidity,
    'Ethereum': SiEthereum,
    'RabbitMQ': SiRabbitmq,
    'Maven': SiApachemaven,

    // Mobile
    'Expo': SiExpo,
    'React Navigation': SiReactrouter, // Close enough
    'Flutter': SiFlutter,
    'Dart': SiDart,
    'Swift': SiSwift,
    'SwiftUI': SiSwift,
    'Kotlin': SiKotlin,
    'Android SDK': SiAndroid,
    'Jetpack Compose': SiAndroid,

    // Database
    'PostgreSQL': SiPostgresql,
    'MongoDB': SiMongodb,
    'Redis': SiRedis,
    'MySQL': SiMysql,
    'Oracle DB': SiOracle,
    'Firebase': SiFirebase,
    'Snowflake': SiSnowflake,
    'Hibernate': SiHibernate,

    // DevOps / Cloud
    'Docker': SiDocker,
    'Kubernetes': SiKubernetes,
    'AWS': SiAmazon,
    'Azure': FaCloud,
    'GitHub Actions': SiGithubactions,
    'Fastlane': SiFastlane,
    'Nginx': SiNginx,
    'Terraform': SiTerraform,
    'Ansible': SiAnsible,
    'Prometheus': SiPrometheus,
    'Grafana': SiGrafana,
    'Apache Airflow': SiApacheairflow,
    'Git': SiGit,

    // Data / AI
    'Pandas': SiPandas,
    'NumPy': SiNumpy,
    'Celery': SiCelery,
    'Apache Spark': SiApachespark,
    'Kafka': SiApachekafka,
    'TensorFlow': SiTensorflow,
    'PyTorch': SiPytorch,
    'Scikit-learn': SiScikitlearn,

    // Tools / Services
    'Stripe': SiStripe,
    'Twilio': SiTwilio,
    'Socket.io': SiSocketdotio,
    'WebRTC': SiWebrtc,
    'Selenium': SiSelenium,
    'OWASP': SiOwasp,
    'Burp Suite': SiBurpsuite,
    'Shopify': SiShopify,
    'Unity': SiUnity,
    'Unity 2D': SiUnity,
    'Unity 3D': SiUnity,
};

const getCategoryIcon = (name: string): IconType => {
    // Simple heuristic for fallback icons based on keywords if we don't have a direct map
    const lowerName = name.toLowerCase();

    if (lowerName.includes('db') || lowerName.includes('sql') || lowerName.includes('data')) return FaDatabase;
    if (lowerName.includes('cloud') || lowerName.includes('aws')) return FaCloud;
    if (lowerName.includes('mobile') || lowerName.includes('app') || lowerName.includes('ios') || lowerName.includes('android')) return FaMobileAlt;
    if (lowerName.includes('game') || lowerName.includes('unity')) return FaGamepad;
    if (lowerName.includes('server') || lowerName.includes('api')) return FaServer;

    return FaCode;
};

export const TechIcon = ({ name, className = "w-5 h-5", showTooltip = true }: TechIconProps) => {
    const IconComponent = iconMap[name] || getCategoryIcon(name);

    return (
        <div className="relative group/tooltip inline-flex items-center justify-center">
            <IconComponent className={className} />

            {showTooltip && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                    {name}
                </span>
            )}
        </div>
    );
};

