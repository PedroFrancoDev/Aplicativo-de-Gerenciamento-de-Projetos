import { FirebaseError } from "firebase/app";

export const handleFirebaseError = (error: FirebaseError) => {
    switch (error.code) {
        case "auth/admin-restricted-operation":
            return "Operação restrita ao administrador.";
        case "auth/argument-error":
            return "Erro nos argumentos fornecidos.";
        case "auth/app-not-authorized":
            return "Aplicativo não autorizado.";
        case "auth/app-not-installed":
            return "Aplicativo não instalado.";
        case "auth/captcha-check-failed":
            return "Verificação de captcha falhou.";
        case "auth/code-expired":
            return "Código expirado.";
        case "auth/cordova-not-ready":
            return "Cordova não está pronto.";
        case "auth/cors-unsupported":
            return "CORS não é suportado.";
        case "auth/credential-already-in-use":
            return "Credencial já está em uso.";
        case "auth/custom-token-mismatch":
            return "Token personalizado não corresponde.";
        case "auth/requires-recent-login":
            return "Requer login recente.";
        case "auth/dependent-sdk-initialized-before-auth":
            return "SDK dependente inicializado antes da autenticação.";
        case "auth/dynamic-link-not-activated":
            return "Link dinâmico não ativado.";
        case "auth/email-change-needs-verification":
            return "Mudança de e-mail precisa de verificação.";
        case "auth/email-already-in-use":
            return "E-mail já em uso.";
        case "auth/emulator-config-failed":
            return "Configuração do emulador falhou.";
        case "auth/expired-action-code":
            return "Código de ação expirado.";
        case "auth/cancelled-popup-request":
            return "Pedido de pop-up cancelado.";
        case "auth/internal-error":
            return "Erro interno.";
        case "auth/invalid-api-key":
            return "Chave da API inválida.";
        case "auth/invalid-app-credential":
            return "Credencial do aplicativo inválida.";
        case "auth/invalid-app-id":
            return "ID do aplicativo inválido.";
        case "auth/invalid-user-token":
            return "Token de usuário inválido.";
        case "auth/invalid-auth-event":
            return "Evento de autenticação inválido.";
        case "auth/invalid-cert-hash":
            return "Hash do certificado inválido.";
        case "auth/invalid-verification-code":
            return "Código de verificação inválido.";
        case "auth/invalid-continue-uri":
            return "URI de continuação inválida.";
        case "auth/invalid-cordova-configuration":
            return "Configuração do Cordova inválida.";
        case "auth/invalid-custom-token":
            return "Token personalizado inválido.";
        case "auth/invalid-dynamic-link-domain":
            return "Domínio de link dinâmico inválido.";
        case "auth/invalid-email":
            return "E-mail inválido.";
        case "auth/invalid-emulator-scheme":
            return "Esquema do emulador inválido.";
        case "auth/invalid-credential":
            return "Credencial inválida.";
        case "auth/invalid-message-payload":
            return "Conteúdo da mensagem inválido.";
        case "auth/invalid-multi-factor-session":
            return "Sessão de múltiplos fatores inválida.";
        case "auth/invalid-oauth-client-id":
            return "ID do cliente OAuth inválido.";
        case "auth/invalid-oauth-provider":
            return "Provedor OAuth inválido.";
        case "auth/invalid-action-code":
            return "Código de ação inválido.";
        case "auth/unauthorized-domain":
            return "Domínio não autorizado.";
        case "auth/wrong-password":
            return "Senha incorreta.";
        case "auth/invalid-persistence-type":
            return "Tipo de persistência inválido.";
        case "auth/invalid-phone-number":
            return "Número de telefone inválido.";
        case "auth/invalid-provider-id":
            return "ID do provedor inválido.";
        case "auth/invalid-recipient-email":
            return "E-mail do destinatário inválido.";
        case "auth/invalid-sender":
            return "Remetente inválido.";
        case "auth/invalid-verification-id":
            return "ID de verificação inválido.";
        case "auth/invalid-tenant-id":
            return "ID de locatário inválido.";
        case "auth/multi-factor-info-not-found":
            return "Informação de múltiplos fatores não encontrada.";
        case "auth/multi-factor-auth-required":
            return "Autenticação de múltiplos fatores necessária.";
        case "auth/missing-android-pkg-name":
            return "Nome do pacote Android ausente.";
        case "auth/missing-app-credential":
            return "Credencial do aplicativo ausente.";
        case "auth/auth-domain-config-required":
            return "Configuração do domínio de autenticação necessária.";
        case "auth/missing-verification-code":
            return "Código de verificação ausente.";
        case "auth/missing-continue-uri":
            return "URI de continuação ausente.";
        case "auth/missing-iframe-start":
            return "Início do iframe ausente.";
        case "auth/missing-ios-bundle-id":
            return "ID do bundle iOS ausente.";
        case "auth/missing-or-invalid-nonce":
            return "Nonce ausente ou inválido.";
        case "auth/missing-multi-factor-info":
            return "Informação de múltiplos fatores ausente.";
        case "auth/missing-multi-factor-session":
            return "Sessão de múltiplos fatores ausente.";
        case "auth/missing-phone-number":
            return "Número de telefone ausente.";
        case "auth/missing-verification-id":
            return "ID de verificação ausente.";
        case "auth/app-deleted":
            return "Aplicativo deletado.";
        case "auth/account-exists-with-different-credential":
            return "Conta já existe com credencial diferente.";
        case "auth/network-request-failed":
            return "Falha na solicitação de rede.";
        case "auth/null-user":
            return "Usuário nulo.";
        case "auth/no-auth-event":
            return "Evento de autenticação não encontrado.";
        case "auth/no-such-provider":
            return "Provedor não encontrado.";
        case "auth/operation-not-allowed":
            return "Operação não permitida.";
        case "auth/operation-not-supported-in-this-environment":
            return "Operação não suportada neste ambiente.";
        case "auth/popup-blocked":
            return "Pop-up bloqueado.";
        case "auth/popup-closed-by-user":
            return "Pop-up fechado pelo usuário.";
        case "auth/provider-already-linked":
            return "Provedor já vinculado.";
        case "auth/quota-exceeded":
            return "Cota excedida.";
        case "auth/redirect-cancelled-by-user":
            return "Redirecionamento cancelado pelo usuário.";
        case "auth/redirect-operation-pending":
            return "Operação de redirecionamento pendente.";
        case "auth/rejected-credential":
            return "Credencial rejeitada.";
        case "auth/second-factor-already-in-use":
            return "Segundo fator já em uso.";
        case "auth/maximum-second-factor-count-exceeded":
            return "Limite de segundos fatores excedido.";
        case "auth/tenant-id-mismatch":
            return "ID de locatário incompatível.";
        case "auth/timeout":
            return "Tempo esgotado.";
        case "auth/user-token-expired":
            return "Token do usuário expirado.";
        case "auth/too-many-requests":
            return "Muitas solicitações. Tente novamente mais tarde.";
        case "auth/unauthorized-continue-uri":
            return "URI de continuação não autorizada.";
        case "auth/unsupported-first-factor":
            return "Primeiro fator não suportado.";
        case "auth/unsupported-persistence-type":
            return "Tipo de persistência não suportado.";
        case "auth/unsupported-tenant-operation":
            return "Operação de locatário não suportada.";
        case "auth/unverified-email":
            return "E-mail não verificado.";
        case "auth/user-cancelled":
            return "Usuário cancelou a operação.";
        case "auth/user-not-found":
            return "Usuário não encontrado.";
        case "auth/user-disabled":
            return "Usuário desativado.";
        case "auth/user-mismatch":
            return "Usuário incompatível.";
        case "auth/user-signed-out":
            return "Usuário desconectado.";
        case "auth/weak-password":
            return "Senha fraca.";
        case "auth/web-storage-unsupported":
            return "Armazenamento web não suportado.";
        case "auth/missing-password":
            return "Senha não fornecida";
        case "auth/missing-email":
            return "e-mail em falta";
        default:
            return "Erro desconhecido. Por favor, tente novamente.";
    }
}
