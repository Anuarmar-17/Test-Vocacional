"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/src/context/AuthContext';

const RegisterView = () => {
  const router = useRouter();
  const { register } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    secondLastName: '',
    documentType: '',
    documentNumber: '',
    course: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName) newErrors.firstName = 'Obligatorio';
    if (!formData.lastName) newErrors.lastName = 'Obligatorio';
    if (!formData.secondLastName) newErrors.secondLastName = 'Obligatorio';
    if (!formData.course) newErrors.course = 'Obligatorio';

    if (!formData.email) {
      newErrors.email = 'Obligatorio';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Correo inválido';
    }

    if (!formData.password) {
      newErrors.password = 'Obligatorio';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Mínimo 8 caracteres';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Obligatorio';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'No coinciden';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');

    if (!validate()) return;

    setIsLoading(true);
    try {
      await register({
        nombre: `${formData.firstName}${formData.middleName ? ' ' + formData.middleName : ''}`,
        apellido: `${formData.lastName}${formData.secondLastName ? ' ' + formData.secondLastName : ''}`,
        correo: formData.email,
        password: formData.password,
        confirm_password: formData.confirmPassword,
        curso: formData.course,
        edad: formData.age ? parseInt(formData.age) : null,
        tipo_documento: formData.documentType || undefined,
        numero_documento: formData.documentNumber || undefined,
      });

      router.push('/login');
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : 'Error en el registro'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex w-full font-sans bg-white">
      {/* Left Column (Identical to LoginView) */}
      <div className="hidden lg:flex w-[35%] bg-[#7C5CFC] text-white p-12 flex-col justify-between relative overflow-hidden">
        {/* Logo */}
        <div className="flex items-center gap-2 z-10">
          <div className="flex -space-x-1">
            <div className="w-4 h-4 rounded-full bg-white opacity-80"></div>
            <div className="w-4 h-4 rounded-full bg-[#FFB020] mix-blend-multiply"></div>
            <div className="w-4 h-4 rounded-full bg-[#FF4F79] mix-blend-multiply"></div>
          </div>
          <span className="font-bold text-xl tracking-tight">Voca <span className="font-normal opacity-90">Test</span></span>
        </div>

        {/* Content */}
        <div className="z-10 max-w-md mt-20">
          <div className="w-10 h-10 bg-[#FFB020] rounded-full flex items-center justify-center mb-8">
            <span className="text-white text-2xl font-serif leading-none mt-2"></span>
          </div>

          <h1 className="text-6xl font-bold leading-[1.1] tracking-tight mb-8">
            Descubre<br />Tu Futuro Profesional.
          </h1>

          <div className="pl-6 border-l border-white/20 mb-8">
            <p className="text-white/80 text-md leading-relaxed mb-6">
              Identifica tus intereses, habilidades y áreas de afinidad para explorar las profesiones que mejor se ajustan a tu perfil y tomar decisiones más informadas sobre tu futuro académico y laboral.
            </p>

            <div className="flex items-center gap-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX6Gat1r36ATdBS7sTqqFH8TvIVPMkqsdLgw&s"
                alt="SENA"
                className="w-10 h-10 rounded-full border-2 border-white/20"
              />
              <div>
                <h4 className="font-semibold text-sm">SENA</h4>
                <p className="text-xs text-white/60">Servicio Nacional de Aprendizaje</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Social Proof */}
        <div className="flex items-center gap-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX6Gat1r36ATdBS7sTqqFH8TvIVPMkqsdLgw&s"
            alt="SENA"
            className="w-10 h-10 rounded-full border-2 border-white/20"
          />
          <div>
            <h4 className="font-semibold text-sm">SENA</h4>
            <p className="text-xs text-white/60">Institución Educativa Pública Colombiana</p>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-black/5 blur-3xl"></div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-[65%] flex items-center justify-center p-8 overflow-y-auto">
        <div className="w-full max-w-md my-auto">
          {/* Mobile Logo */}
          <div className="flex lg:hidden items-center justify-center gap-2 mb-8">
            <div className="flex -space-x-1">
              <div className="w-5 h-5 rounded-full bg-[#7C5CFC]"></div>
              <div className="w-5 h-5 rounded-full bg-[#FFB020] mix-blend-multiply"></div>
              <div className="w-5 h-5 rounded-full bg-[#FF4F79] mix-blend-multiply"></div>
            </div>
            <span className="font-bold text-2xl tracking-tight text-[#7C5CFC]">Voca <span className="font-normal text-gray-400">Test</span></span>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Regístrate</h2>
            <p className="text-gray-500 text-sm">Ingresa tus datos para registrarte en la plataforma</p>
          </div>

          {serverError && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              <span>{serverError}</span>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Primer nombre *"
                  className={`w-full text-gray-500 px-4 py-3.5 rounded-xl border ${errors.firstName ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/20 focus:border-[#7C5CFC] transition-all bg-white text-sm`}
                  disabled={isLoading}
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  placeholder="Segundo nombre (opcional)"
                  className="w-full text-gray-500 px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/20 focus:border-[#7C5CFC] transition-all bg-white text-sm"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Primer apellido *"
                  className={`w-full text-gray-500 px-4 py-3.5 rounded-xl border ${errors.lastName ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/20 focus:border-[#7C5CFC] transition-all bg-white text-sm`}
                  disabled={isLoading}
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="secondLastName"
                  value={formData.secondLastName}
                  onChange={handleChange}
                  placeholder="Segundo apellido *"
                  className={`w-full text-gray-500 px-4 py-3.5 rounded-xl border ${errors.secondLastName ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/20 focus:border-[#7C5CFC] transition-all bg-white text-sm`}
                  disabled={isLoading}
                />
                {errors.secondLastName && <p className="text-red-500 text-xs mt-1">{errors.secondLastName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <select
                  name="documentType"
                  value={formData.documentType}
                  onChange={handleChange}
                  className="w-full text-gray-500 px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/20 focus:border-[#7C5CFC] transition-all bg-white text-sm appearance-none cursor-pointer"
                  disabled={isLoading}
                >
                  <option value="">Tipo de documento (opcional)</option>
                  <option value="CC">Cédula de ciudadanía</option>
                  <option value="TI">Tarjeta de identidad</option>
                  <option value="CE">Cédula de extranjería</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  name="documentNumber"
                  value={formData.documentNumber}
                  onChange={handleChange}
                  placeholder="Núm. de documento (opcional)"
                  className="w-full text-gray-500 px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/20 focus:border-[#7C5CFC] transition-all bg-white text-sm"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  placeholder="Curso (ej. 10° B, 11° D) *"
                  className={`w-full text-gray-500 px-4 py-3.5 rounded-xl border ${errors.course ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/20 focus:border-[#7C5CFC] transition-all bg-white text-sm`}
                  disabled={isLoading}
                />
                {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course}</p>}
              </div>
              <div>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Edad (opcional)"
                  min="1"
                  max="120"
                  className="w-full text-gray-500 px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/20 focus:border-[#7C5CFC] transition-all bg-white text-sm"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Correo electrónico *"
                className={`w-full text-gray-500 px-4 py-3.5 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/20 focus:border-[#7C5CFC] transition-all bg-white text-sm`}
                disabled={isLoading}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Contraseña *"
                  className={`w-full text-gray-500 px-4 py-3.5 rounded-xl border ${errors.password ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/20 focus:border-[#7C5CFC] transition-all bg-white text-sm pr-12`}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-[22px] -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirme cont. *"
                  className={`w-full text-gray-500 px-4 py-3.5 rounded-xl border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/20 focus:border-[#7C5CFC] transition-all bg-white text-sm pr-12`}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-[22px] -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showConfirmPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-4 bg-[#7C5CFC] hover:bg-[#6a4ee0] disabled:bg-[#7C5CFC]/60 disabled:cursor-not-allowed text-white font-medium py-3.5 rounded-xl transition-colors shadow-sm shadow-[#7C5CFC]/30 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Registrando...</span>
                </>
              ) : (
                'Crear Cuenta'
              )}
            </button>
          </form>

          <div className="mt-8 flex items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink-0 px-4 text-xs text-gray-400">O inicia sesión</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              ¿Ya tienes cuenta? <a href="/login" className="text-[#7C5CFC] font-medium hover:underline">Inicia sesión</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterView;
