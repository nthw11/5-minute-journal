import PrintHide from "../PrintHide/PrintHide"

const JournalNav = () => {
  return (
    // nav bar that will be on the left side of the journal page and reference the different pages
    <PrintHide>
    <nav>
      <ul>
        <li>Dashboard</li>
        <li>Quarterly</li>
        <li>Weekly</li>
        <li>Daily</li>
      </ul>
    </nav>
    </PrintHide>
  )
}

export default JournalNav
