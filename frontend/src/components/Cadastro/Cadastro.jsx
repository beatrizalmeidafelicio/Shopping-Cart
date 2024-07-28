import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';

// Componente funcional Cadastro
const Cadastro = () => {
  const navigate = useNavigate(); // Hook para navegação

  // Hook useEffect para adicionar e remover event listener no formulário
  useEffect(() => {
    const formulario = document.querySelector('form');

    // Função assíncrona para lidar com o envio do formulário
    const cadastrar = async (event) => {
      event.preventDefault(); // Previne o comportamento padrão de submit do formulário

      const Inome = document.querySelector('.nome');
      const Iemail = document.querySelector('.email');
      const Isenha = document.querySelector('.senha');
      const Itelefone = document.querySelector('.telefone');

      // Validação do nome (apenas letras de A a Z)
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

      // Cria o objeto usuário com os dados do formulário
      const usuario = {
        nome: Inome.value.trim(),
        email: Iemail.value.trim(),
        senha: Isenha.value, // Senha não tem validação específica aqui
        telefone: Itelefone.value.trim(),
      };

      try {
        // Faz a requisição para a API
        await axios.post('http://localhost:8080/api/cadastro/checkout', usuario);
        console.log('Usuário cadastrado na API:', usuario);
        limpar(); // Limpa o formulário após o cadastro
        navigate('/home'); // Navega para a página home após o cadastro
      } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
      }
    };

    // Função para limpar o formulário
    const limpar = () => {
      formulario.reset();
    };

    // Adiciona o event listener de submit ao formulário
    formulario.addEventListener('submit', cadastrar);

    // Remove o event listener quando o componente é desmontado
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
