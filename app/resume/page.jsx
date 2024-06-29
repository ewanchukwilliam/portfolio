"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
	SiTailwindcss,
	SiNextdotjs,
	SiExpress,
	SiMysql,
	SiPython,
	SiC,
	SiCplusplus,
	SiReact,
	SiNodedotjs,
	SiDocker,
	SiAssemblyscript,
	SiArduino,
	SiRaspberrypi,
	SiMicrosoftexcel,
	SiMicrosoftpowerpoint,
	SiMicrosoftword,
	SiGoogledocs,
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiGit,
} from "react-icons/si";

const about = {
	title: "About me",
	description:
		"William Ewanchuk, a Bachelor of Science in Computer Engineering student at the University of Alberta, combines proficiency in web development technologies like HTML, CSS, React, Node.js, and JavaScript with hands-on experience in software development methodologies and version control.",
	info: [
		{
			fieldName: "Name",
			fieldValue: "William Ewanchuk",
		},
		{
			fieldName: "Phone",
			fieldValue: "(+1) 780 288 7365",
		},
		{
			fieldName: "Experience",
			fieldValue: "0 years",
		},
		{
			fieldName: "Skype",
			fieldValue: "william.01",
		},
		{
			fieldName: "Nationality",
			fieldValue: "Canadian",
		},
		{
			fieldName: "Email",
			fieldValue: "ewanchukwilliam@gmail.com",
		},
		{
			fieldName: "School Email",
			fieldValue: "wewanchu@ualberta.ca",
		},
		{
			fieldName: "Lanuages",
			fieldValue: "English",
		},
	],
};

// experience <data value=""></data>
const experience = {
	icon: "assets/resume/badge.svg",
	title: "My experience",
	description:
		"Managed server replacements at Starbucks, ensuring smooth operations through remote coordination and meticulous documentation, enhancing web development and IT infrastructure skills.",
	items: [
		{
			company: "Starbucks",
			position: "Server Technician Remote",
			duration: "June 2024 - Present",
		},
		{
			company: "Bravo Target Safety",
			position: "Emergency Medical Responder",
			duration: "June 2021 - Present",
		},
	],
};

// education data
const education = {
	icon: "assets/resume/badge.svg",
	title: "My education",
	description:
		"I'm pursuing a Computer Engineering degree and have certifications in Emergency Response and Full Stack Development, combining technical knowledge with hands-on web development experience.",
	items: [
		{
			insitution: "University of Alberta",
			degree: "Bachelors of Computer Engineering Co-op",
			duration: "2021-present",
		},
		{
			insitution: "Western Insitute of Emergency Education",
			degree: "Emergency Medical Responder",
			duration: "2021",
		},
		{
			insitution: "CodeAcademy",
			degree: "Front-end Track",
			duration: "2023",
		},
		{
			insitution: "Online Course",
			degree: "Full Stack Developer",
			duration: "2024",
		},
	],
};

// skills data
const skills = {
	title: "My skills",
	description:
		"I am proficient in various programming languages, including Bash script, Python, JavaScript, HTML, CSS, C, C++, Cmake, Makefiles, SQL, Matlab, and Assembly. He has experience with embedded systems, utilizing microcontrollers such as STM32, Arduino, and Raspberry Pi for server-related home projects. Additionally, he is skilled in software development methodologies, version control, web development, and data analysis using Microsoft Office Suite and Google Docs for project management and presentation. ",
	skillList: [
{
      icon: <SiHtml5 />,
      name: "HTML5",
    },
    {
      icon: <SiCss3 />,
      name: "CSS3",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
    },
    {
      icon: <SiReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiNodedotjs />,
      name: "Node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiPython />,
      name: "Python",
    },
    {
      icon: <SiC />,
      name: "C",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <SiGit />,
      name: "Git",
    },
    {
      icon: <SiDocker />,
      name: "Docker",
    },
    {
      icon: <SiAssemblyscript />,
      name: "Assembly",
    },
    {
      icon: <SiArduino />,
      name: "Arduino",
    },
    {
      icon: <SiRaspberrypi />,
      name: "Raspberry Pi",
    },
    {
      icon: <SiMicrosoftexcel />,
      name: "Microsoft Excel",
    },
    {
      icon: <SiMicrosoftpowerpoint />,
      name: "Microsoft PowerPoint",
    },
    {
      icon: <SiMicrosoftword />,
      name: "Microsoft Word",
    },
    {
      icon: <SiGoogledocs />,
      name: "Google Docs",
    },
	],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
		>
			<div className="container mx-auto">
				<Tabs
					defaultValue="experience"
					className="flex flex-col xl:flex-row gap-[60px]"
				>
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
						<TabsTrigger value="about">About me</TabsTrigger>
					</TabsList>
					{/* content */}
					<div className="min-h-[70vh] w-full">
						{/* experience */}
						<TabsContent value="experience" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold ">{experience.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{experience.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-col-1 lg:grid-cols-2 gap-[30px]">
										{experience.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
														{item.position}
													</h3>
													<div className="flex items-center gap-3">
														{/* dot */}
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{item.company}</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/* education */}

						<TabsContent value="education" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold ">{education.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{education.description}
								</p>
								<ScrollArea className="h-[300px]">
									<ul className="grid grid-col-1 lg:grid-cols-2 gap-[30px]">
										{education.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<span className="text-accent">{item.insitution}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
														{item.degree}
													</h3>
													<div className="flex items-center gap-3">
														{/* dot */}
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{item.duration}</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/* skills */}

						<TabsContent value="skills" className="w-full">
							<div className="flex flex-col gap-[30px]">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold">{skills.title}</h3>
									<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
										{skills.description}
									</p>
								</div>
								<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
									{skills.skillList.map((skill, index) => {
										return (
											<li key={index}>
												<TooltipProvider delayDuration={100}>
													<Tooltip>
														<TooltipTrigger className=" w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
															<div className="text-6xl group-hover:tetxt-accent transition-all duration-300">
																{skill.icon}
															</div>
														</TooltipTrigger>
														<TooltipContent>
															<p className="capitalize">{skill.name}</p>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>
						{/* about */}
						<TabsContent
							value="about"
							className="w-full text-center xl:text-left"
						>
							<div className="flex flex-col gap-[30px]">
								<h3 className="text-4xl font-bold">{about.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{about.description}
								</p>
								<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
									{about.info.map((item, index) => {
										return (
											<li
												key={index}
												className="flex items-center justify-center xl:justify-start gap-4"
											>
												<span className="text-white/60">{item.fieldName}</span>
												<span className="text-xl">{item.fieldValue}</span>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;
