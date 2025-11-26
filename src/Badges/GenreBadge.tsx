import '../css/GanreBadge.css';

type GenreBadgePropsType = { name: string };

const GenreBadge = ({ name }: GenreBadgePropsType) => {
    return <span className="genre-badge">{name}</span>;
};

export default GenreBadge;
