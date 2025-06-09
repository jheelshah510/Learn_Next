
type CardProps = {
    imageSrc: string;
    title: string;
    description: string;
};



const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
    return (
        <div className="max-w-md rounded overflow-hidden shadow-lg">
            <img className="w-full" src={imageSrc} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;