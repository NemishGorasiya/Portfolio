import { useMotionValue, useSpring } from "framer-motion";
import "./App.css";
import Spinner from "./components/Spinner";

function App() {
	// const mousePosition = {
	// 	x: useMotionValue(0),
	// 	y: useMotionValue(0),
	// };

	const spring = {
		stiffness: 150,
		damping: 15,
		mass: 0.1,
	};

	const mousePosition = {
		x: useSpring(0, spring),
		y: useSpring(0, spring),
	};

	const mouseMove = (event) => {
		const { clientX, clientY } = event;
		mousePosition.x.set(clientX - 85);
		mousePosition.y.set(clientY - 100);
	};
	return (
		<div className="app h-screen" onMouseMove={mouseMove}>
			hello
			<Spinner position={mousePosition} isMovable={true} />
			<Spinner />
		</div>
	);
}

export default App;
