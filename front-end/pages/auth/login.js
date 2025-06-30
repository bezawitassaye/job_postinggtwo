import Navbar from '../../components/Navbar';
import LoginForm from '../../components/LoginForm';

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
        <LoginForm />
      </div>
    </>
  );
}
