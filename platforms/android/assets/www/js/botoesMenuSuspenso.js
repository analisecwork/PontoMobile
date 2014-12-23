/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function() {

    $("#bt_SuspCartaoPonto").click(function() {
        window.location.replace("cartaoPonto.html");
    });

    $("#bt_SuspAtualizaCP").click(function() {
        navigator.notification.alert("Funcionalidade não disponível nessa versão.", alertCallback, "Atenção", "Ok")
    });

    $("#bt_SuspMensagemRH").click(function() {
        navigator.notification.alert("Funcionalidade não disponível nessa versão.", alertCallback, "Atenção", "Ok")
    });

    $("#bt_SuspNotificacoes").click(function() {
        navigator.notification.alert("Funcionalidade não disponível nessa versão.", alertCallback, "Atenção", "Ok")
    });

    $("#bt_Sair").click(function() {
        removeEntity();
        window.location.replace("index.html");
    });

    function alertCallback() {

    }
});