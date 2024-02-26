interface IProps {
	className?: string;
}

const Loader: React.FC<IProps> = (props) => {
	// You can add any UI inside Loader, including a Skeleton.
	return <div className={`login-loader ${props.className}`} />;
};
export default Loader;
