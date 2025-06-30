import Navbar from '../../components/Navbar';
import RegisterForm from '../../components/RegisterForm';

export default function Register() {
  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
        <RegisterForm />
      </div>
    </div>
  );
}
