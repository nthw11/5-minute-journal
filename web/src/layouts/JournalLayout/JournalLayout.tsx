import JournalNav from "src/components/JournalNav/JournalNav"
import PrintHide from "src/components/PrintHide/PrintHide"

type JournalLayoutProps = {
  children?: React.ReactNode
}

const JournalLayout = ({ children }: JournalLayoutProps) => {
  return <>
  
  <JournalNav />{children}

  </>

}

export default JournalLayout
