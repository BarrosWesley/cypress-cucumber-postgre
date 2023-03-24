// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('consultarSl',(cpf) => {
     return cy.task('connectDB', `select * from central_negociacao.solicitacao where cpf_cliente = '${cpf}';`) 
 })

 Cypress.Commands.add('deletarSolicitacao', (cpf) => {
  return cy.task(lista = [
   `delete from central_negociacao.documento_objeto where id_documento in (select id_documento from central_negociacao.documento where id_solicitacao in (select id_solicitacao from central_negociacao.solicitacao where cpf_cliente = '${cpf}'));`,
   `delete from central_negociacao.documento where id_solicitacao in (select id_solicitacao from central_negociacao.solicitacao where cpf_cliente = '${cpf}');`,
   `delete from central_negociacao.andamento_tarefa where id_solicitacao in (select id_solicitacao from central_negociacao.solicitacao where cpf_cliente = '${cpf}');`,
   `delete from central_negociacao.mensagem_file where id_mensagem in (select id_mensagem from central_negociacao.mensagem where id_solicitacao in (select id_solicitacao from central_negociacao.solicitacao where cpf_cliente = '${cpf}'));`,
   `delete from central_negociacao.mensagem where id_solicitacao in (select id_solicitacao from central_negociacao.solicitacao where cpf_cliente = '${cpf}');`,
   `delete from central_negociacao.atendimento_solicitacao where id_solicitacao in (select id_solicitacao from central_negociacao.solicitacao where cpf_cliente = '${cpf}');`,
   `delete from central_negociacao.solicitacao_grupo where id_solicitacao in (select id_solicitacao from central_negociacao.solicitacao where cpf_cliente = '${cpf}');`,
   `delete from central_negociacao.ultima_alteracao_solicitacao where id_solicitacao in (select id_solicitacao from central_negociacao.solicitacao where cpf_cliente = '${cpf}');`,
   `delete from central_negociacao.anotacao where id_solicitacao in (select id_solicitacao from central_negociacao.solicitacao where cpf_cliente = '${cpf}');`,
   `delete from central_negociacao.solicitacao_etiqueta where id_solicitacao in (select id_solicitacao from central_negociacao.solicitacao where cpf_cliente = '${cpf}');`,
   `delete from central_negociacao.endereco_envolvido where id_envolvido in ((select id_envolvido from central_negociacao.envolvido where id_solicitacao in (select id_solicitacao from central_negociacao.solicitacao where cpf_cliente = '${cpf}')));`,
   `delete from central_negociacao.telefone_envolvido where id_envolvido in ((select id_envolvido from central_negociacao.envolvido where id_solicitacao in (select id_solicitacao from central_negociacao.solicitacao where cpf_cliente = '${cpf}')));`,
   `delete from  central_negociacao.email_envolvido where id_envolvido in ((select id_envolvido from central_negociacao.envolvido where id_solicitacao in (select id_solicitacao from central_negociacao.solicitacao where cpf_cliente = '${cpf}')));`,
   `delete from  central_negociacao.dados_banc_env where id_envolvido in ((select id_envolvido from central_negociacao.envolvido where id_solicitacao in (select id_solicitacao from central_negociacao.solicitacao where cpf_cliente = '${cpf}')));`,
   `delete from central_negociacao.envolvido  where id_solicitacao in (select id_solicitacao from central_negociacao.solicitacao where cpf_cliente = '${cpf}');`,
   `delete from central_negociacao.dados_banc_env where id_envolvido in ((select id_envolvido from central_negociacao.envolvido where id_solicitacao in (select id_solicitacao from central_negociacao.solicitacao where cpf_cliente = '${cpf}')));`,
   `delete from central_negociacao.endereco_imovel where id_imovel in ((select id_imovel from central_negociacao.imovel where id_solicitacao in (select id_solicitacao from central_negociacao.solicitacao where cpf_cliente = '${cpf}')));`,
   `delete from central_negociacao.cartorio_imovel where id_imovel in ((select id_imovel from central_negociacao.imovel where id_solicitacao in (select id_solicitacao from central_negociacao.solicitacao where cpf_cliente = '${cpf}')));`,
   `delete from central_negociacao.imovel where id_solicitacao in (select id_solicitacao from central_negociacao.solicitacao where cpf_cliente = '${cpf}');`,
   `delete from central_negociacao.simulacao_imob where id_solicitacao in (select id_solicitacao from central_negociacao.solicitacao where cpf_cliente = '${cpf}');`,
   `delete from central_negociacao.dados_adicionais_cliente where id_solicitacao in (select id_solicitacao from central_negociacao.solicitacao where cpf_cliente = '${cpf}');`,
   `delete from central_negociacao.solicitacao_autenticidade where solicitacao_id in (select id_solicitacao from central_negociacao.solicitacao where cpf_cliente = '${cpf}');`,
   `delete from central_negociacao.aviso_solicitacao where id_solicitacao in (select id_solicitacao from central_negociacao.solicitacao where cpf_cliente = '${cpf}');`,
   `delete from central_negociacao.solicitacao where cpf_cliente = '${cpf}' and tp_solicitacao in ('5', '6', '9', '10', '15', '16', '17', '18', '19', '20', '30', '33', '34', '35', '36');`])
})

Cypress.Commands.add('deleteImoveisEtapa1Cid', (idSolicitacao) => {
 return cy.task(lista = [
  `delete from central_negociacao.endereco_imovel where id_imovel = (select id_imovel from central_negociacao.imovel where id_solicitacao = '${idSolicitacao}');`,
  `delete from central_negociacao.cartorio_imovel where id_imovel = (select id_imovel from central_negociacao.imovel where id_solicitacao = '${idSolicitacao}');`,
  `delete from central_negociacao.imovel where id_solicitacao = '${idSolicitacao}';`])
})

Cypress.Commands.add('deletarVendedorEtapa1Cid', (idSolicitacao) => {
 return cy.task(lista = [
  `delete from central_negociacao.dados_banc_env where id_envolvido in ((select id_envolvido from central_negociacao.envolvido where id_solicitacao = '${id_solicitacao}'));`,
  `delete from central_negociacao.endereco_envolvido where id_envolvido in ((select id_envolvido from central_negociacao.envolvido where id_solicitacao = '${id_solicitacao}'));`,
  `delete from central_negociacao.telefone_envolvido where id_envolvido in ((select id_envolvido from central_negociacao.envolvido where id_solicitacao = '${id_solicitacao}'));`,
  `delete from central_negociacao.email_envolvido where id_envolvido in ((select id_envolvido from central_negociacao.envolvido where id_solicitacao = '${id_solicitacao}'));`,
  `delete from central_negociacao.documento where id_solicitacao = '${id_solicitacao}';`,
  `delete from central_negociacao.envolvido where id_solicitacao = '${id_solicitacao}';`])
})

Cypress.Commands.add('deletarParticipanteVendedoresDocumentosEtapa1Cid', (idSolicitacao) => {
 return cy.task(lista = [
  `delete from central_negociacao.dados_banc_env where id_envolvido = (select id_envolvido from central_negociacao.envolvido where id_solicitacao = '${id_solicitacao}');`,
  `delete from central_negociacao.endereco_envolvido where id_envolvido = (select id_envolvido from central_negociacao.envolvido where id_solicitacao = '${id_solicitacao}');`,
  `delete from central_negociacao.telefone_envolvido where id_envolvido = (select id_envolvido from central_negociacao.envolvido where id_solicitacao = '${id_solicitacao}');`,
  `delete from central_negociacao.email_envolvido where id_envolvido = (select id_envolvido from central_negociacao.envolvido where id_solicitacao = '${id_solicitacao}');`,
  `delete from central_negociacao.documento where id_solicitacao = '${id_solicitacao}';`,
  `delete from central_negociacao.envolvido where id_solicitacao = '${id_solicitacao}';`])
})

Cypress.Commands.add('resetarDocsEtapa2Cid', (idSolicitacao) => {
 return cy.task(`"update central_negociacao.documento set objeto = null, st_documento = 2 where id_solicitacao = '${id_solicitacao}' and id_tipo_documento not in (5,2,3,4);"`)
})

Cypress.Commands.add('consultarSolicitacao', (cpf) => {
 return cy.task(`select count(*) from central_negociacao.solicitacao where cpf_cliente = '${cpf}';`).than(response => {
  if(response.rows <= 0) {
   cy.incluirSolicitacao(cpf)
  }
 })
 
})

Cypress.Commands.add('incluirSolicitacao', (cpf) => {
 return cy.task(`INSERT INTO central_negociacao.solicitacao (cpf_cliente, tp_solicitacao, st_solicitacao, dt_inicio) VALUES ('${cpf}', '5', '1', current_timestamp)`)
})

Cypress.Commands.add('alterarStatusSolicitacao', (statusSt, cpf) => {
 return cy.task(`UPDATE central_negociacao.solicitacao SET st_solicitacao = '${statusSt}' WHERE cpf_cliente = '${cpf}';`)
})

Cypress.Commands.add('incluirPendencia', (cpf) => {
 return cy.task(`select count(*) from central_negociacao.documento where id_solicitacao = (select id_solicitacao from  
  central_negociacao.solicitacao where cpf_cliente = '#{cpf}' order by dt_inicio desc limit 1);`).than(response => {
   if(response.rows <= 0) {
    cy.task(`INSERT INTO central_negociacao.documento (id_solicitacao, id_tipo_documento, nome, st_documento, dt_cadastro) 
    values ((select id_solicitacao from  central_negociacao.solicitacao where cpf_cliente = '#{cpf}' order by dt_inicio desc limit 1), 6, 'testeWB', 2, current_timestamp);`)
   }else {
    console.log('Já existem pendências para essa solicitação')
   }
  })
})

Cypress.Commands.add('alterarLimiteSolicitacoes', () => {
 return cy.task(lista = [`UPDATE central_negociacao.tipo_solicitacao SET limite = 1 WHERE id_tipo_solicitacao = 5;,`
  `UPDATE central_negociacao.tipo_solicitacao SET limite = 1 WHERE id_tipo_solicitacao = 6;`])
})