import { useAuth } from "../../context/AuthProvider/useAuth"

interface props {
  children: JSX.Element;
}

export const ProtectLayout = ({ children }: props ) => {
  const auth = useAuth()

  if (!auth.email) {
    return <h1>You need to login</h1>
  }
  return children
}