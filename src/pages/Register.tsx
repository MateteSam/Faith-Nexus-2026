import RegistrationForm from '@/components/RegistrationForm';

const Register = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-3xl mx-auto px-4">
  <h1 className="text-4xl font-extrabold text-center mb-4">Register for Faith Nexus 2026</h1>
        <p className="text-center text-muted-foreground mb-8">Reserve your spot — no payment required at this stage.</p>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Register;
