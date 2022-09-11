import { motion } from "framer-motion";
import React, { useState } from "react";

const squares = [
	{ color: "#ead200", title: "1", desc: "sq 1" },
	{ color: "#19a0fa", title: "2", desc: "sq 2" },
	{ color: "#6acb00", title: "3", desc: "sq 3" },
	{ color: "#771ada", title: "4", desc: "sq 4" },
];

const PageTransitionn = () => {
	const [square, setSquare] = useState("");

	const squareVariant = {
		hidden: {},
		visible: {},
		whileHover: {
			y: -10,
		},
	};

	const squaresItems = squares.map((square, index) => {
		return (
			<motion.div onClick={() => setSquare(square.color)} whileHover={squareVariant.whileHover} key={index} style={{ backgroundColor: square.color }} className={`flex items-center justify-center w-20 h-20 rounded-xl`}>
				<h1>{square.desc}</h1>
			</motion.div>
		);
	});

	const profileCont = (prop) => {

    return (
      <div className="max-w-lg flex flex-col justify-center bg-gradient-to-r from-lime-700 to-lime-300 p-8">
			<h1 className="text-4xl pl-2">lorem title</h1>

			<div className="flex pt-12">
				<div className="w-1/3">
					<div className="w-28 h-28 rounded-full bg-gray-200"></div>
				</div>
				<div className="w-3/4">
					<p className="text-lg text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam laborum saepe, voluptatum pariatur voluptate dolorem ducimus hic dolorum sequi alias?</p>
				</div>
			</div>
		</div>
    )
  }
	

	console.log(square);

	return (
		<div className="">
       {square ? profileCont(square) : <motion.div className="flex justify-center space-x-5 max-w-lg w-full">{squaresItems}</motion.div>}

			
		</div>
	);
};

export default PageTransitionn;
