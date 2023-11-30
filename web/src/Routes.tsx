// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      <Route path="/quarterly" page={QuarterlyPage} name="quarterly" />
      <Route path="/weekly" page={WeeklyPage} name="weekly" />
      <Route path="/daily" page={DailyPage} name="daily" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/account/profile" page={AccountProfilePage} name="accountProfile" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
