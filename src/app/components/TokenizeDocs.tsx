"use client";
import React from "react";

export default function TokenizeDocs() {
  return (
    <section className="mt-10 bg-white border rounded-xl p-6 shadow-sm text-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">
        🧭 Guía de uso — Pestaña “Tokenizar”
      </h2>

      <p className="text-sm text-gray-600 mb-6">
        En esta sección puedes <strong>crear tu propio token ERC-20</strong> en la red Ethereum
        (Sepolia). El proceso genera automáticamente tres contratos inteligentes interconectados:
      </p>

      <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
        <li><strong>TokenV2:</strong> el token ERC-20 principal con opciones de mint, burn y fee.</li>
        <li><strong>VaultV2:</strong> bóveda que controla la emisión y quema del token.</li>
        <li><strong>StakePool:</strong> (opcional) contrato de staking para recompensas.</li>
      </ul>

      {/* === Campos === */}
      <div className="mt-8 space-y-6 text-sm leading-relaxed">
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-2">
            🧾 Campos del formulario
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Nombre del token:</strong> nombre descriptivo, por ejemplo
              <em> “Token Needine Utilidades”</em>.
            </li>
            <li>
              <strong>Símbolo:</strong> abreviatura de 3-6 letras, como <code>NEEDN</code>.
            </li>
            <li>
              <strong>Suministro inicial:</strong> cantidad inicial de tokens que se emitirán al owner.
              <br />
              <span className="text-gray-500 text-xs">
                (El sistema ajusta automáticamente 18 decimales, ejemplo: 1.000.000 → 1e24 unidades)
              </span>
            </li>
            <li>
              <strong>Descripción:</strong> texto libre para detallar propósito o uso del token.
            </li>
          </ul>
        </div>

        {/* === Opciones === */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-2">
            ⚙️ Opciones avanzadas
          </h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Token mintable:</strong> habilita que el owner pueda emitir nuevos tokens
              más adelante desde el Vault.
            </li>
            <li>
              <strong>Token burnable:</strong> permite al owner o al Vault destruir tokens.
            </li>
            <li>
              <strong>Token stakable:</strong> crea automáticamente un contrato <code>StakePool</code> para
              que los usuarios puedan bloquear tokens y ganar recompensas.
            </li>
          </ul>
          <p className="text-xs text-gray-500 mt-1">
            Estas banderas determinan qué funciones estarán activas una vez desplegado el token.
          </p>
        </div>

        {/* === Coste === */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-2">
            💰 Coste de creación
          </h3>
          <p>
            Cada tokenización requiere un pago simbólico de <strong>10 USD en ETH</strong>, determinado por
            el oráculo <code>ETH/USD</code>. Este valor se calcula automáticamente mediante la función{" "}
            <code>getRequiredFeeInEth()</code>.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Este importe se transfiere directamente a la billetera de la plataforma para cubrir gas
            e infraestructura de pruebas.
          </p>
        </div>

        {/* === Resultado === */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-2">
            🚀 Resultado del despliegue
          </h3>
          <p>
            Al presionar <strong>“Crear token”</strong>, se inicia la transacción de despliegue. Tras
            confirmarse:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Se emite un evento <code>AssetTokenCreated</code>.</li>
            <li>Recibes las direcciones de <strong>Token</strong>, <strong>Vault</strong> y (si aplica) <strong>StakePool</strong>.</li>
            <li>El token se mostrará automáticamente en la pestaña <strong>“Mis tokens creados”</strong>.</li>
          </ul>
          <p className="text-xs text-gray-500 mt-1">
            Puedes ver la transacción y los contratos directamente en Etherscan.
          </p>
        </div>

        {/* === Roles === */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-2">🔐 Roles iniciales</h3>
          <table className="w-full text-sm border border-gray-200">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="text-left p-2">Rol</th>
                <th className="text-left p-2">Permisos</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 font-medium">Owner</td>
                <td className="p-2">
                  Recibe el suministro inicial, controla el Vault y el StakePool.
                </td>
              </tr>
              <tr>
                <td className="p-2 font-medium">Factory</td>
                <td className="p-2">
                  Solo despliega contratos; no conserva control posterior.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* === Recomendaciones === */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-2">
            🧩 Recomendaciones
          </h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Verifica que tu cuenta tenga suficiente ETH en la red Sepolia antes de crear el token.</li>
            <li>Usa nombres y símbolos únicos para evitar confusión en los exploradores.</li>
            <li>Guarda las direcciones generadas (Token, Vault, StakePool) después del despliegue.</li>
            <li>No compartas tu clave privada: el owner es el único con permisos de gestión.</li>
          </ul>
        </div>

        <p className="text-xs text-gray-500 italic">
          🧠 Nota: todos los contratos están auditados con medidas de seguridad básicas (ReentrancyGuard, Ownable)
          y se ejecutan exclusivamente en la red Sepolia para fines de investigación y pruebas.
        </p>
      </div>
    </section>
  );
}
