"use client";
import React from "react";

export default function OwnerDocs() {
  return (
    <section className="mt-10 bg-white border rounded-xl p-6 shadow-sm text-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">
        📘 Guía de uso — Panel del Owner
      </h2>

      <p className="text-sm text-gray-600 mb-6">
        Esta sección permite al <strong>propietario (owner)</strong> de cada token desplegado
        gestionar y administrar los parámetros de su activo, su bóveda (<code>Vault</code>) y su
        pool de staking (<code>StakePool</code>), si aplica.
      </p>

      <div className="space-y-6 text-sm leading-relaxed">
        {/* --- Acceso --- */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-2">
            🔹 Acceso
          </h3>
          <ol className="list-decimal ml-6 space-y-1">
            <li>Conecta tu cartera MetaMask a la red <strong>Sepolia</strong>.</li>
            <li>Abre la pestaña <strong>“Mis tokens creados”</strong>.</li>
            <li>Se listarán automáticamente todos los tokens que hayas desplegado desde el Factory.</li>
          </ol>
        </div>

        {/* --- Mint/Burn --- */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-2">
            🔸 Bloque: “Mint / Burn desde el Vault”
          </h3>
          <p>
            Permite <strong>crear (mint)</strong> o <strong>destruir (burn)</strong> tokens desde la
            bóveda asociada al activo.
          </p>

          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Dirección:</strong> destino (mint) o origen (burn). Si se deja vacío, usa tu dirección conectada.</li>
            <li><strong>Cantidad:</strong> número de tokens (convertido automáticamente a 18 decimales).</li>
          </ul>

          <div className="mt-2">
            <p className="text-gray-700 mb-1">🟩 <strong>Mint:</strong> emite nuevos tokens. Requiere <code>mintable = true</code>.</p>
            <p className="text-gray-700">🟥 <strong>Burn:</strong> destruye tokens. Requiere <code>burnable = true</code>.</p>
          </div>

          <p className="text-xs text-gray-500 mt-2">
            Solo el owner del Vault puede ejecutar estas acciones. Las operaciones se registran con
            los eventos <code>Minted</code> y <code>Burned</code>.
          </p>
        </div>

        {/* --- Gestión del Token --- */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-2">
            🔧 Bloque: “Gestión del Token (solo Owner)”
          </h3>
          <p>
            Permite al owner modificar las propiedades económicas del token y gestionar las exenciones
            de comisiones.
          </p>

          <h4 className="mt-3 font-semibold text-gray-800">1️⃣ Actualizar Fee (comisión)</h4>
          <p>Define la comisión por transferencia en <em>basis points</em> (bps):</p>
          <ul className="list-disc ml-6 mt-1 space-y-1">
            <li><code>100 bps = 1%</code></li>
            <li><code>500 bps = 5%</code> (máximo permitido)</li>
          </ul>
          <p className="text-xs text-gray-500 mt-1">
            Usa el botón <strong>“Actualizar Fee”</strong> para ejecutar <code>setFeeBps()</code>.
          </p>

          <h4 className="mt-3 font-semibold text-gray-800">2️⃣ Cambiar FeeRecipient</h4>
          <p>
            Especifica la nueva dirección que recibirá las comisiones cobradas. Al actualizar,
            la nueva dirección se marca automáticamente como exenta.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Usa el botón <strong>“Cambiar FeeRecipient”</strong> para ejecutar <code>setFeeRecipient()</code>.
          </p>

          <h4 className="mt-3 font-semibold text-gray-800">3️⃣ Exenciones de comisión</h4>
          <p>
            Permite incluir o eliminar direcciones exentas del cobro de comisiones durante transferencias.
          </p>
          <ul className="list-disc ml-6 mt-1">
            <li><strong>Eximir:</strong> <code>setFeeExempt(addr, true)</code></li>
            <li><strong>Quitar exención:</strong> <code>setFeeExempt(addr, false)</code></li>
          </ul>
        </div>

        {/* --- Mensajes y flujo --- */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-2">
            🔹 Flujo de uso recomendado
          </h3>
          <ol className="list-decimal ml-6 space-y-1">
            <li>Crear el token desde la pestaña <strong>“Tokenizar”</strong>.</li>
            <li>Verlo listado en <strong>“Mis tokens creados”</strong>.</li>
            <li>Probar <strong>Mint</strong> o <strong>Burn</strong> según permisos.</li>
            <li>Ajustar <strong>Fee</strong> y <strong>FeeRecipient</strong>.</li>
            <li>Marcar direcciones internas como <strong>exentas</strong>.</li>
            <li>(Opcional) Configurar recompensas en el <strong>StakePool</strong>.</li>
          </ol>
        </div>

        {/* --- Roles --- */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-2">🔐 Roles y permisos</h3>
          <table className="w-full text-sm border border-gray-200">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="text-left p-2">Rol</th>
                <th className="text-left p-2">Permisos</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 font-medium">Owner del Token</td>
                <td className="p-2">Puede ejecutar funciones de <code>setFee*</code>, <code>mint</code>, <code>burn</code>.</td>
              </tr>
              <tr>
                <td className="p-2 font-medium">Usuarios normales</td>
                <td className="p-2">Pueden transferir tokens o participar en staking.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* --- Eventos --- */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-2">📡 Eventos relevantes</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li><code>AssetTokenCreated</code> — se emite al crear un nuevo token.</li>
            <li><code>Minted</code> y <code>Burned</code> — operaciones de Vault.</li>
            <li><code>Transfer</code> — transferencias y cobro de fee.</li>
          </ul>
        </div>

        <p className="text-xs text-gray-500 italic">
          🧠 Nota: todas las funciones están restringidas al owner on-chain y ejecutadas mediante
          MetaMask sobre la red Sepolia.
        </p>
      </div>
    </section>
  );
}
