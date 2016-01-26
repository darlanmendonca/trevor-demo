/* globals angular */
'use strict';

angular
  .module('demo')
  .provider('Translate', TranslateProvider);

function TranslateProvider() {
  let en = {
    'login.password': 'Password',
    'login.submit': 'Login',
    'common.create': 'Create',
    'common.edit': 'Edit',
    'common.name': 'Name',
    'common.allrights': 'All rights reserved',
    'common.invalid-address': 'Invalid Address',
    'common.required-field': 'Required Field',
    'common.search': 'Search',
    'common.language': 'Language',
    'common.profile': 'Profile',
    'menu.users': 'Users',
    'menu.logout': 'Logout',
    'sites.list': 'Sites list',
    'sites.list.description': 'Hover mouse in site, to show options',
    'sites.acronym': 'Acronym',
    'sites.reseller': 'Reseller',
    'sites.publisher': 'Publisher',
    'sites.enterprise': 'Enterprise',
    'sites.description': 'Description',
    'sites.keywords': 'Keywords',
    'sites.remove': 'Remove',
    'sites.pressDeleteToRemove': 'Press delete to remove',
    'sites.secret': 'Secret',
    'users.list': 'Users list',
    'users.list.description': 'Hover mouse in user, to show options',
    'ecommerce.list': 'Ecommerce Partners',
    'ecommerce.list.description': 'Hover mouse in partner, to show options',
    'English': 'English',
    'Español': 'Spanish',
    'Português': 'Portuguese',
  };

  let es = {
    'login.password': 'Clave',
    'login.submit': 'Iniciar sesión',
    'common.create': 'Crear',
    'common.edit': 'Editar',
    'common.name': 'Nombre',
    'common.allrights': 'Todos los derechos reservados',
    'common.invalid-address': 'Dirección inválida',
    'common.required-field': 'Campo requerido',
    'common.search': 'Buscar',
    'common.language': 'Idioma',
    'common.profile': 'Perfil',
    'menu.users': 'Usuarios',
    'menu.logout': 'Cerrar sesión',
    'sites.list': 'Lista de sites',
    'sites.list.description': 'Coloque el cursor en el sitio, para mostrar las opciones',
    'sites.acronym': 'Acrónimo',
    'sites.reseller': 'Revendedores',
    'sites.publisher': 'Editor',
    'sites.enterprise': 'Empresa',
    'sites.description': 'Descripción',
    'sites.keywords': 'Palabras clave',
    'sites.remove': 'Eliminar',
    'sites.pressDeleteToRemove': 'Pulse Suprimir para eliminar',
    'sites.secret': 'Secreto',
    'users.list': 'Lista de usuarios',
    'users.list.description': 'Coloque el cursor en el usuario, para mostrar las opciones',
    'ecommerce.list': 'Socios Ecommerce',
    'ecommerce.list.description': 'Coloque el cursor en el socio, para mostrar las opciones',
    'English': 'Inglés',
    'Español': 'Español',
    'Português': 'Português'
  };

  let pt = {
    'login.password': 'Senha',
    'login.submit': 'Logar',
    'common.create': 'Criar',
    'common.edit': 'Editar',
    'common.name': 'Nome',
    'common.allrights': 'Todos os direitos reservados',
    'common.invalid-address': 'Endereço inválido',
    'common.required-field': 'Campo obrigatório',
    'common.search': 'Pesquisar',
    'common.language': 'Idioma',
    'common.profile': 'Perfil',
    'menu.users': 'Usuários',
    'menu.logout': 'Sair',
    'sites.list': 'Lista de sites',
    'sites.list.description': 'Passe o mouse no site, para mostrar as opções',
    'sites.acronym': 'Acrônimo',
    'sites.reseller': 'Revendedores',
    'sites.publisher': 'Editor',
    'sites.enterprise': 'Empresa',
    'sites.description': 'Descrição',
    'sites.keywords': 'Palavras Chaves',
    'sites.remove': 'Remover',
    'sites.pressDeleteToRemove': 'Aperte delete para remover',
    'sites.secret': 'Secredo',
    'users.list': 'Lista de usuários',
    'users.list.description': 'Passe o mouse no usuário, para mostrar as opções',
    'ecommerce.list': 'Parceiros Ecommerce',
    'ecommerce.list.description': 'Passe o mouse no parceiro, para mostrar as opções',
    'English': 'Inglês',
    'Español': 'Espanhol',
    'Português': 'Português'
  };

  return {
    $get: ()=> ({en, es, pt})
  };
}
