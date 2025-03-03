const projects = [
	{
		id: "dicoding-academy",
		title: "Dicoding Academy",
		date: "June 10, 2024",
		category: "Web Application",
		description: "The best learning platforms for software developers.",
		tools: ["HTML", "CSS", "JavaScript", "React.js", "TailwindCSS", "Flutter"],
		img: require('@/assets/images/web-project-2.jpg'),

		images: [
			{ id: 1, title: "Dicoding Image 1", img: require('@/assets/images/web-project-2.jpg') },
			{ id: 2, title: "Dicoding Image 2", img: require('@/assets/images/dicoding.jpg') },
		],
		companyInfos: [
			{ id: 1, title: "Name", details: "Dicoding Indonesia" },
			{ id: 2, title: "Services", details: "Online Learning Platform" },
			{ id: 3, title: "Website", details: "https://dicoding.com" },
		],
		details: [
			{ id: 1, details: "Dicoding Academy provides high-quality courses for developers." },
			{ id: 2, details: "This platform is used by thousands of developers across Indonesia." },
		],
		related: [
			{ id: "ibe-project", title: "IBE Project", img: require('@/assets/images/web-project-1.jpg') }
		]
	},
	{
		id: "class-presentation",
		title: "Class Presentation Design",
		date: "July 5, 2024",
		category: "UI Design",
		description: "Design an engaging and professional class presentation.",
		tools: ["Figma", "Adobe XD", "Canva"],
		img: require('@/assets/images/ui-project-1.jpg'), 
		images: [
			{ id: 1, title: "Presentation Image 1", img: require('@/assets/images/ui-project-1.jpg') },
			{ id: 2, title: "Presentation Image 2", img: require('@/assets/images/presentation.jpg') },
		],
		companyInfos: [
			{ id: 1, title: "Name", details: "Presentation Studio" },
			{ id: 2, title: "Services", details: "Graphic Design & UI" },
		],
		details: [
			{ id: 1, details: "Use a color combination that aligns with the class theme." },
			{ id: 2, details: "Ensure high readability across various devices." },
		],
		related: [
			{ id: "dicoding-academy", title: "Dicoding Academy", img: require('@/assets/images/web-project-2.jpg') }
		]
	},
	{
		id: "ibe-project",
		title: "IBE Project",
		date: "August 15, 2024",
		category: "Web Application",
		description: "IBE codes everything.",
		tools: ["React", "Node.js", "MongoDB"],
		img: require('@/assets/images/web-project-1.jpg'),
		images: [
			{ id: 1, title: "IBE Image 1", img: require('@/assets/images/web-project-1.jpg') }
		],
		companyInfos: [
			{ id: 1, title: "Name", details: "IBE Ltd" },
			{ id: 2, title: "Services", details: "Web Development" },
			{ id: 3, title: "Website", details: "https://ibe.com" },
		],
		details: [
			{ id: 1, details: "Create projects on an international scale." }
		],
		related: [
			{ id: "dicoding-academy", title: "Dicoding Academy", img: require('@/assets/images/web-project-2.jpg') }
		]
	}
];

export default projects;
