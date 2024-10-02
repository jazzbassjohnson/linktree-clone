import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileView from './components/ProfileView';
import EditView from './components/EditView';

const AppRouter = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<ProfileView />} />  
        <Route path="/:id" element={<ProfileView />} />
        <Route path="/edit/:id/" element={<EditView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;