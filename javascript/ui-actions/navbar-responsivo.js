"use strict"
/*
 * Script para exibir e ocultar o navbar nas versões mobile.
 */

// Obter elementos DOM
const botaoAbrirNavbar = document.getElementById("responsive-navbar-button")
const navbar = document.getElementById("navbar-header")
const botaoFecharNavbar = document.getElementById("button-close-sidebar")

// Adicionar eventos Listeners
// Clicar no botão de abrir navbar
botaoAbrirNavbar.addEventListener("click", exibirNavbar)
// Clicar no botão de fechar navbar
botaoFecharNavbar.addEventListener("click", fecharNavbar)

/**
 * Função que exibe o navbar mobile.
 */
function exibirNavbar() {
  // Adicionar classe 'show' que exibe o sidebar dentro da tela
  navbar.classList.add("show")
}

/**
 * Função que oculta o navbar mobile.
 */
function fecharNavbar() {
  // Remover a classe 'show'
  navbar.classList.remove("show")
}
