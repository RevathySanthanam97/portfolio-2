import Title from "../components/Title"
import Tero from "../assets/teroshop.jpg"
import "./Project.scss"
import { Link } from "react-router-dom"
import { Root, List, Trigger, Content } from "@radix-ui/react-tabs"
import Globus from "../assets/globus.svg?react";
import TL from "../assets/tl.svg?react";
import Ibudin from "../assets/ibudin.svg?react";
import HT from "../assets/ht.svg?react";
import Asbjorn from "../assets/asbjorn.svg?react";
import Kunigund from "../assets/kunigund.svg?react";
import Rafland from "../assets/rafland.svg?react";
import Bestseller from "../assets/bestseller.svg?react";
import A4 from "../assets/a4.svg?react";
import Arrow from "../assets/arrow.svg?react";
import Byggtogbuid from "../assets/bg.png";
import ScrollAnimation from "./ScrollAnimation"

const Projects = () => {
	return (
		<div className="projects container">
			<Title>Projects</Title>
			<Root className="TabsRoot" defaultValue="tab1">
				<List className="TabsList" aria-label="Manage your account">
					<Trigger className="TabsTrigger" value="tab1">
						Omnishop
					</Trigger>
					<Trigger className="TabsTrigger" value="tab2">
						Teroshop
					</Trigger>
				</List>
				<Content className="TabsContent" value="tab1">
					<div className="project-list">
						<p>
						I built a scalable and flexible eCommerce framework using Next.js and Magento, helping launch <span className="color">10+ projects within tight 4-week sprints</span>. To give clients full control over their content, I created a custom setup using DatoCMS and GraphQL, allowing them to build and update complex pages without needing developer support. I integrated Algolia Instant Search for lightning-fast product discovery and Klaviyo for personalized email flows like abandoned cart reminders and product view notifications. For marketing insights, I set up tracking with Google Analytics, Meta Analytics, and Google Tag Manager. I also introduced a Gift Registry feature backed by DynamoDB, which added a fun and useful experience for end users.
						<p><b>Tech Stack:</b> Frontend: HTML, CSS, SASS, Styled Components, Next JS</p>
						<p><b>Backend:</b> NodeJS, Magento, Apollo Graphql</p>
						</p>
						<ScrollAnimation animation="slide-up" once={false} duration={500} delay={150}>
							<a href="https://www.globus.is" target="_blank" className="project-item" style={{ backgroundColor: "#7A1632" }}>
								<Globus />
							</a>
						</ScrollAnimation>
						<ScrollAnimation animation="slide-up" once={false} duration={500} delay={150}>
							<a href="https://www.a4.is" target="_blank" className="project-item" style={{ backgroundColor: "#FF3500" }}>
								<A4 />
							</a>
						</ScrollAnimation>
						<ScrollAnimation animation="slide-up" once={false} duration={500} delay={150}>
							<a href="https://www.bestseller.is" target="_blank" className="project-item" style={{ backgroundColor: "#fff" }}>
								<Bestseller />
							</a>
						</ScrollAnimation>
						<ScrollAnimation animation="slide-up" once={false} duration={500} delay={150}>
							<a href="https://www.ibudin.is" target="_blank" className="project-item" style={{ backgroundColor: "#C81A46" }}>
								<Ibudin />
							</a>
						</ScrollAnimation>
						<ScrollAnimation animation="slide-up" once={false} duration={500} delay={150}>
							<a href="https://www.ht.is" target="_blank" className="project-item" style={{ backgroundColor: "#ed1c24" }}>
								<HT />
							</a>
						</ScrollAnimation>
						<ScrollAnimation animation="slide-up" once={false} duration={500} delay={150}>
							<a href="https://www.asbjorn.is" target="_blank" className="project-item" style={{ backgroundColor: "#1820EF" }}>
								<Asbjorn />
							</a>
						</ScrollAnimation>
						<ScrollAnimation animation="slide-up" once={false} duration={500} delay={150}>
							<a href="https://www.kunigund.is" target="_blank" className="project-item" style={{ backgroundColor: "#811419" }}>
								<Kunigund />
							</a>
						</ScrollAnimation>
						<ScrollAnimation animation="slide-up" once={false} duration={500} delay={150}>
							<a href="https://www.byggtogbuid.is" target="_blank" className="project-item" style={{ backgroundColor: "#fff" }}>
								<img src={Byggtogbuid} />
							</a>
						</ScrollAnimation>
						<ScrollAnimation animation="slide-up" once={false} duration={500} delay={150}>
							<a href="https://www.rafland.is" target="_blank" className="project-item" style={{ backgroundColor: "#01AEB3" }}>
								<Rafland />
							</a>
						</ScrollAnimation>
						<ScrollAnimation animation="slide-up" once={false} duration={500} delay={150}>
							<a href="https://www.tl.is" target="_blank" className="project-item" style={{ backgroundColor: "#166CC8" }}>
								<TL />
							</a>
						</ScrollAnimation>
					</div>
				</Content>
				<Content className="TabsContent" value="tab2">
					<div className="project-list teroshop">
						<p>Built an eCommerce framework that fetches MBC data via webhooks, processes it into DynamoDB, and serves it via GraphQL. Designed a frontend with Atomic Design, usable as a full storefront or headless. Published shared components to AWS CodeArtifact.
							<p>
								<b>Frontend:</b> HTML, CSS, SASS, React Typescript, Vite, React Router Dom, Radix UI
							</p>
							<p>
								<b>Backend:</b> Python, DynamoDB, Business Central, Rest API, Apollo Graphql
							</p>
						</p>
						<ScrollAnimation animation="slide-up" once={false} duration={500} delay={150}>
							<a href="https://dev.clink.is/theme-preview?templateCode=default" target="_blank" className="project-item">
								<span>Payment App <Arrow /></span>
							</a>
						</ScrollAnimation>
						<ScrollAnimation animation="slide-up" once={false} duration={500} delay={150}>
							<a href="https://primitives-preview.labs.roanuz.com/" target="_blank" className="project-item">
								<span>UI Primitives <Arrow /></span>

							</a>
						</ScrollAnimation>
						<ScrollAnimation animation="slide-up" once={false} duration={500} delay={150}>
							<a href="https://ts-primitives.tero.roanuz.com/" target="_blank" className="project-item">
								<span>Ecommerce UI <Arrow /></span>

							</a>
						</ScrollAnimation>
						<ScrollAnimation animation="slide-up" once={false} duration={500} delay={150}>
							<a href="https://ts-demo.tero.roanuz.com/product/e4bee85b-8586-ef11-ac23-000d3adddf54" target="_blank" className="project-item">
								<span>Boilerplate <Arrow /></span>
							</a>
						</ScrollAnimation>
					</div>
				</Content>
			</Root>
			{/* <div className="project-list">
				<div className="project-item">	
					<div className="project-left">
						<div className="project-content">
							<h3>Omnishop</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut felis odio. Duis varius, urna non posuere interdum, augue enim consequat nunc, a rutrum elit orci ac quam. Donec sagittis, augue vel tempus placerat, quam sem pulvinar orci, quis scelerisque elit justo at mi. Etiam tempus nunc eget est lobortis feugiat.</p>
							<p>Tech Stack: Next js, Apollo Graphql, Nodejs</p>
							<Link to="/projects/omnishop" className="primary">View Project</Link>
						</div>
					</div>
					<div className="project-right">
						<img src={Omnishop} />
					</div>
				</div>
				<div className="project-item">
					<div className="project-left">
						<div className="project-content">
							<h3>Teroshop</h3>
							<p> Curabitur laoreet consequat mauris, non tristique magna imperdiet non. Fusce dignissim id diam quis euismod. Aliquam in lacus maximus turpis interdum varius. Vestibulum viverra sollicitudin elit ac gravida. Proin pharetra velit lacinia iaculis feugiat. Donec ac mollis lacus.</p>
							<Link to="/projects/teroshop" className="primary">View Project</Link>
						</div>
					</div>
					<div className="project-right">
						<img src={Tero} />
					</div>
				</div>
				<div className="project-item">
					<div className="project-left">
						<div className="project-content">
							<h3>Clink</h3>
							<p> Curabitur laoreet consequat mauris, non tristique magna imperdiet non. Fusce dignissim id diam quis euismod. Aliquam in lacus maximus turpis interdum varius. Vestibulum viverra sollicitudin elit ac gravida. Proin pharetra velit lacinia iaculis feugiat. Donec ac mollis lacus.</p>
							<Link to="/projects/clink" className="primary">View Project</Link>
						</div>
					</div>
					<div className="project-right">
						<img src={Clink} />
					</div>
				</div>
			</div> */}
		</div>
	)
}

export default Projects