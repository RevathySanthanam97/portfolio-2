import "./Title.scss"

interface TitleProps {
  children: React.ReactNode
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h2>
			<span>
				{children}
			</span>
    </h2>
  )
}

export default Title