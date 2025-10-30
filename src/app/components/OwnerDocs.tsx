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
        gestionar y administrar los parámetros de su activo, su bóveda (<code>Vault</code>), su
        pool de staking (<code>StakePool</code>) y su contrato de liberación de tokens (<code>Vesting</code>).
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
        {/* --- NUEVO: Staking Rewards Management --- */}
        <div>
          <h3 className="text-lg font-semibold text-green-700 mb-2">
            💠 Bloque: “Staking — Gestión de Recompensas (solo Owner)”
          </h3>

          <p>
            Si activaste la opción de <strong>staking</strong> al crear tu token, se despliega un
            contrato <code>StakePool</code> vinculado al activo. Este bloque permite configurar
            una campaña de recompensas para los usuarios que bloqueen (stakeen) tu token.
          </p>

          <h4 className="mt-3 font-medium text-gray-800">1️⃣ Aprobar tokens para el Staking (approve)</h4>
          <p>
            Antes de cargar recompensas, el owner debe <strong>autorizar</strong> al contrato
            <code>StakePool</code> para mover los tokens de recompensa desde su wallet.
          </p>

          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Ingresa la cantidad de tokens que quieres destinar como recompensa.</li>
            <li>El formulario ejecuta <code>token.approve(stakePool, amount)</code></li>
            <li>Este paso otorga permiso al pool para retirar esa cantidad cuando inicie la campaña.</li>
          </ul>

          <p className="text-xs text-gray-500 mt-1">
            ⚠️ Consejo: aprueba solo el monto necesario para evitar riesgos de exceso de allowance.
          </p>

          <h4 className="mt-4 font-medium text-gray-800">2️⃣ Configurar la campaña de recompensas</h4>
          <p>
            Después de aprobar los tokens, puedes iniciar la campaña ejecutando:
            <code>notifyRewardAmount(reward, duration)</code>
          </p>

          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Recompensa total:</strong> tokens totales que se distribuirán</li>
            <li><strong>Duración (segundos):</strong> tiempo total durante el cual se repartirán</li>
          </ul>

          <p className="text-gray-700 mt-1">
            Ejemplo: <code>1000 tokens — duración 30 días (~2,592,000 segundos)</code>
          </p>

          <p className="text-xs text-gray-500 mt-2">
            Durante ese periodo, quienes hagan staking ganarán recompensas proporcionalmente.
          </p>

          <div className="mt-3 text-green-700 text-xs">
            ✅ Resumen del flujo:
            <ol className="list-decimal ml-6 space-y-1 mt-1">
              <li>El owner aprueba tokens para recompensas</li>
              <li>El owner inicia la campaña ingresando monto + duración</li>
              <li>Los usuarios ya pueden hacer staking y ganar tokens</li>
            </ol>
          </div>

          <p className="text-xs italic text-gray-500 mt-3">
            🧠 Nota: El owner puede iniciar tantas campañas como desee (una tras otra).
            Si inicia una nueva antes de terminar la anterior, los rewards remanentes se acumulan automáticamente.
          </p>
        </div>
        {/* --- NUEVO: Vesting Management --- */}
        <div>
          <h3 className="text-lg font-semibold text-purple-700 mb-2">
            🎁 Bloque: “Vesting Management (solo Owner)”
          </h3>

          <p>
            Permite configurar <strong>planes de liberación programada de tokens</strong> para tus colaboradores,
            inversores o cualquier dirección beneficiaria. El contrato <code>Vesting</code> retiene los tokens
            y los va liberando automáticamente con el paso del tiempo.
          </p>

          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              <strong>Beneficiario:</strong> dirección que recibirá los tokens conforme avanza el tiempo.
            </li>
            <li>
              <strong>Monto:</strong> cantidad total de tokens a liberar (convertidos a 18 decimales automáticamente).
            </li>
            <li>
              <strong>Start (timestamp UNIX):</strong> momento de inicio del vesting (por ejemplo, <code>{Math.floor(Date.now() / 1000)}</code> para “ahora”).
            </li>
            <li>
              <strong>Cliff (segundos):</strong> periodo inicial durante el cual no se libera nada (bloqueo temporal).
            </li>
            <li>
              <strong>Duración total:</strong> tiempo total (en segundos) hasta que se libere el 100 % del monto.
            </li>
          </ul>

          <div className="mt-3">
            <p className="text-gray-700 mb-1">
              🟪 <strong>Crear Vesting:</strong> ejecuta <code>createSchedule()</code>. El contrato retiene los tokens y genera un nuevo
              plan de liberación para el beneficiario.
            </p>
            <p className="text-gray-700 mb-1">
              🟩 <strong>Liberar:</strong> ejecuta <code>release(id)</code>. El beneficiario (o el owner actuando por él) reclama los tokens ya desbloqueados según el tiempo transcurrido.
            </p>
            <p className="text-gray-700">
              🟥 <strong>Revocar:</strong> ejecuta <code>revoke(user, id)</code>. Cancela el plan de vesting, recuperando los tokens no liberados.
              Los tokens ya liberados quedan reclamables por el beneficiario.
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-2">
            💡 Consejo: puedes calcular fácilmente los segundos de un mes (~2.592.000 s) o un año (~31.536.000 s).
            Por ejemplo: cliff de 3 meses = <code>7776000</code> s.
          </p>

          <p className="text-xs text-gray-500 mt-1">
            Todos los vestings creados se almacenan on-chain. El contrato garantiza que los tokens
            solo se liberen de forma lineal y nunca antes del cliff.
          </p>
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

        {/* --- Flujo de uso --- */}
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
            <li>Configurar planes en <strong>Vesting Management</strong> para entregar tokens bloqueados con cronograma.</li>
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
                <td className="p-2">
                  Puede ejecutar funciones de <code>setFee*</code>, <code>mint</code>, <code>burn</code>,
                  <code>createSchedule</code>, <code>revoke</code> y <code>release</code> en el contrato Vesting.
                </td>
              </tr>
              <tr>
                <td className="p-2 font-medium">Beneficiarios</td>
                <td className="p-2">
                  Pueden consultar y liberar sus tokens disponibles mediante <code>release()</code>.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* --- Eventos --- */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-2">📡 Eventos relevantes</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li><code>AssetTokenCreated</code> — se emite al crear un nuevo token y sus contratos asociados.</li>
            <li><code>Minted</code> y <code>Burned</code> — operaciones de Vault.</li>
            <li><code>Transfer</code> — transferencias y cobro de fee.</li>
            <li><code>VestingCreated</code>, <code>Released</code>, <code>Revoked</code> — operaciones del contrato Vesting.</li>
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
