import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';

const Cadastro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const formulario = document.querySelector('form');

    const cadastrar = (event) => {
      event.preventDefault();

      const Inome = document.querySelector('.nome');
      const Iemail = document.querySelector('.email');
      const Isenha = document.querySelector('.senha');
      const Itelefone = document.querySelector('.telefone');

      // Validação do nome (letras de A a Z)
      const nomeValido = /^[a-zA-Z]+$/.test(Inome.value.trim());
      if (!nomeValido) {
        alert('Nome deve conter apenas letras de A a Z.');
        return;
      }

      // Validação do email (deve conter "@gmail.com")
      const emailValido = /\b[A-Za-z0-9._%+-]+@gmail\.com\b/.test(Iemail.value.trim());
      if (!emailValido) {
        alert('Email deve ser válido e terminar com "@gmail.com".');
        return;
      }

      // Validação do telefone (11 dígitos numéricos)
      const telefoneValido = /^\d{11}$/.test(Itelefone.value.trim());
      if (!telefoneValido) {
        alert('Telefone deve conter exatamente 11 dígitos numéricos.');
        return;
      }

      const usuario = {
        nome: Inome.value.trim(),
        email: Iemail.value.trim(),
        senha: Isenha.value, // Senha não tem validação específica aqui
        telefone: Itelefone.value.trim(),
      };

      let usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];
      usuariosCadastrados.push(usuario);

      localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));

      console.log('Usuário cadastrado localmente:', usuario);
      limpar();
      console.log('Redirecionando para /home');
      navigate('/home'); // redireciona para a página principal
    };

    const limpar = () => {
      formulario.reset();
    };

    formulario.addEventListener('submit', cadastrar);

    return () => {
      formulario.removeEventListener('submit', cadastrar);
    };
  }, [navigate]);

  return (
    <div className="box">
      <i className="fas fa-shopping-cart"></i>
      <h1 className="cadastro">Cadastro</h1>

      <form id="cadastroForm" action="">
        <input type="text" className="nome" name="nome" placeholder="Nome" required />
        <input type="email" className="email" name="email" placeholder="Email" required />
        <input type="password" className="senha" name="senha" placeholder="Senha" required />
        <input type="tel" className="telefone" name="tel" placeholder="Telefone" required />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
