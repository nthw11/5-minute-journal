import JournalNav from "src/components/JournalNav/JournalNav"

type JournalLayoutProps = {
  children?: React.ReactNode
}

const JournalLayout = ({ children }: JournalLayoutProps) => {
  return <>
  <JournalNav />{children}</>
}

export default JournalLayout
