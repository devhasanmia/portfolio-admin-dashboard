import MainLayout from "./layout/MainLayout";
import ProtectedRoute from "./pages/auth/ProtectedRoute";

const App = () => {
  return (
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  );
};

export default App;
