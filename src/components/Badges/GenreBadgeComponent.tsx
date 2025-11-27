import '../../css/GanreBadge.css';

type GenreBadgePropsType = { name: string };

const GenreBadgeComponent = ({ name }: GenreBadgePropsType) => {
    return <span className="genre-badge">{name}</span>;
};

export default GenreBadgeComponent;
