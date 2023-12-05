import AccountNav from "src/components/AccountNav/AccountNav"

type AccountLayoutProps = {
  children?: React.ReactNode
}

const AccountLayout = ({ children }: AccountLayoutProps) => {
  return <>
  <AccountNav />
  {children}</>
}

export default AccountLayout
