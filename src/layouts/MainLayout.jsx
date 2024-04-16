import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import MyFooter from '../components/MyFooter'
import NavBar from '../components/NavBar'

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<p>Загрузка ...</p>}>
        <Outlet />
      </Suspense>
      <MyFooter />
    </>
  )
}

export default MainLayout
