// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import JournalLayout from 'src/layouts/JournalLayout/JournalLayout'
import AccountLayout from './layouts/AccountLayout/AccountLayout'


const Routes = () => {
  return (
    <Router>

      <Set wrap={AccountLayout}>
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={JournalLayout}>
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        <Route path="/quarterly" page={QuarterlyPage} name="quarterly" />
        <Route path="/weekly" page={WeeklyPage} name="weekly" />
        <Route path="/daily" page={DailyPage} name="daily" />
        <Route path="/login" page={LoginPage} name="login" />
      </Set>
        <Route path="/account/profile" page={AccountProfilePage} name="accountProfile" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
